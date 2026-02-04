import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execSync } from "node:child_process";
import readline from "node:readline/promises"; // Use the promise-based API
import { stdin as input, stdout as output } from "node:process";

const BASH_CODE = `
# Zero CLI Jump Function
zero() {
    if [ "$1" = "jump" ]; then
        DEST=$(command zero jump "$2")
        if [ $? -eq 0 ] && [ -n "$DEST" ]; then
            cd "$DEST"
        fi
    else
        command zero "$@"
    fi
}
`;

const PWSH_CODE = `
# Zero CLI Jump Function
function zero {
    $zeroExe = (Get-Command zero -CommandType Application -ErrorAction SilentlyContinue).Source
    if (!$zeroExe) { return }
    if ($args[0] -eq "jump") {
        $dest = & $zeroExe jump $args[1]
        if ($LASTEXITCODE -eq 0 -and ![string]::IsNullOrWhiteSpace($dest)) {
            Set-Location $dest
        }
    } else {
        & $zeroExe @args
    }
}
`;

async function setup() {
    console.log("\n--- Zero CLI Setup ---");

    if (!process.stdout.isTTY) {
        console.log("Non-interactive terminal. Skipping setup.");
        return;
    }

    const rl = readline.createInterface({ input, output });
    const answer = await rl.question(
        "Add 'zero jump' to your shell profile? (y/n): ",
    );
    rl.close();

    if (answer.toLowerCase() !== "y") {
        console.log("Setup skipped.\n");
        return;
    }

    const isWindows = process.platform === "win32";

    if (isWindows) {
        try {
            const profilePath = execSync(
                'powershell -NoProfile -Command "echo $PROFILE"',
            )
                .toString()
                .trim();
            appendToFile(profilePath, PWSH_CODE);
        } catch (e) {
            console.error("Could not locate PowerShell profile.");
        }
    } else {
        const home = os.homedir();
        [path.join(home, ".zshrc"), path.join(home, ".bashrc")].forEach(
            (file) => {
                if (fs.existsSync(file)) appendToFile(file, BASH_CODE);
            },
        );
    }
}

function appendToFile(filePath, code) {
    const content = fs.existsSync(filePath)
        ? fs.readFileSync(filePath, "utf8")
        : "";
    if (!content.includes("Zero CLI Jump Function")) {
        fs.appendFileSync(filePath, `\n${code}\n`);
        console.log(`✅ Updated: ${filePath}`);
    }
}

setup();

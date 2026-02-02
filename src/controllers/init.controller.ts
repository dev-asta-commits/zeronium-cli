// database implementation to be added

// @ts-expect-error -- options should be a json object but yeahhh
export const initController = (str: string, options) => {
    try {
        // @ts-expect-error -- idk some random ts error ig??
        console.log("\nCreated a project with the name : ", str.split()[0]);
        if (options.tag) {
            console.log("\n tags : ");
            for (let i = 0; i < options.tag.length; i++) {
                console.log("", i + 1, options.tag[i]);
            }
        }
        if (options.cat) console.log("\n category :", options.cat);
        console.log("\n status :", options.status);
    } catch (err) {
        console.log("Error occured in initController", err);
    }
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function buildFilesData(files) {
    let filesData = {};
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileKeys = Object.keys(file);
        for (let j = 0; j < fileKeys.length; j++) {
            const fileValue = file[`${fileKeys[j]}`];
            if (!fileValue)
                continue;
            filesData[`files[${i}][${fileKeys[j]}]`] = fileValue;
        }
    }
    const filesDataKeys = Object.keys(filesData);
    return { filesData, filesDataKeys };
}
exports.default = buildFilesData;
//# sourceMappingURL=buildFilesData.js.map
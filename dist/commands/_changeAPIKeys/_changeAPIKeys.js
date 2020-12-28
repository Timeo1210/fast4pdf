"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.make_ChangeAPIKeysCommand = void 0;
const commander_1 = __importDefault(require("commander"));
const changeAPIKeys_1 = __importDefault(require("../../utils/changeAPIKeys"));
function make_ChangeAPIKeysCommand() {
    const _changeAPIKeys = new commander_1.default.Command("_changeAPIKeys");
    _changeAPIKeys.description("Change your API Keys").action(() => {
        changeAPIKeys_1.default();
    });
    return _changeAPIKeys;
}
exports.make_ChangeAPIKeysCommand = make_ChangeAPIKeysCommand;
//# sourceMappingURL=_changeAPIKeys.js.map
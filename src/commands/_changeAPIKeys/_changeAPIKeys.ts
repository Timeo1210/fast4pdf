import commander from "commander";
import changeAPIKeys from "../../utils/changeAPIKeys";

export function make_ChangeAPIKeysCommand(): commander.Command {
  const _changeAPIKeys = new commander.Command("_changeAPIKeys");
  _changeAPIKeys.description("Change your API Keys").action(() => {
    changeAPIKeys();
  });

  return _changeAPIKeys;
}

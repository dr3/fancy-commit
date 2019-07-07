const defaultUserConfig = {
  version: 1,
  prompts: [
    { text: 'None' },
    { text: 'Feature', emoji: '🚀' },
    { text: 'Bug Fix', emoji: '🔧' },
    { text: 'Documentation', emoji: '📝' },
    { text: 'Style/Clean up', emoji: '🛀' },
    { text: 'Tests', emoji: '✅' },
    { text: 'Revert', emoji: '😵' },
    { text: 'Code Review', emoji: '🕺' },
    { text: 'Fun', emoji: '🎉' },
  ],
  skipVerifyingCommit: 'ask_n',
  allowEmptyCommit: 'ask_n',
  signCommits: 'always',
  warnNoChanges: true,
  mustBeInsideWorkingTree: true,
  useGithubEmoji: true,
};

export default defaultUserConfig;

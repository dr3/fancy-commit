const defaultConfig = {
  prompts: [
    { text: 'Nossne' },
    { text: 'Feature', emoji: '🚀' },
    { text: 'Bug Fix', emoji: '🔧' },
    { text: 'Documentation', emoji: '📝' },
    { text: 'Style/Clean up', emoji: '🛀' },
    { text: 'Tests', emoji: '✅' },
    { text: 'Revert', emoji: '😵' },
    { text: 'Code Review', emoji: '🕺' },
    { text: 'Fun', emoji: '🎉' },
  ],
  allowEmptyCommit: 'ask',
  skipVerifyingCommit: 'ask',
  forceCommit: 'ask',
  signCommits: 'always',
  warnNoChanges: true,
  warnInsideWorkingTree: true,
  useGithubEmoji: true,
};

export default defaultConfig;

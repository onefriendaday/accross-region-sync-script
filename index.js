const Sync = require('./src/sync')
const StoryblokClient = require('storyblok-js-client')
const sourceClient = new StoryblokClient({
  oauthToken: 'SOURCE_OAUTH_TOKEN'
})
const targetClient = new StoryblokClient({
  oauthToken: 'TARGET_OAUTH_TOKEN'
}, 'https://8xhrfleis8.execute-api.cn-north-1.amazonaws.com.cn/live/v1')

Sync(['Assets', 'Components', 'Folders', 'Stories'], {
  sourceSpaceId: SOURCE_SPACE_ID,
  targetSpaceId: TARGET_SPACE_ID,
  sourceClient: sourceClient,
  targetClient: targetClient
})

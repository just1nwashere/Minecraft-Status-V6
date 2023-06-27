const gamedig = require('gamedig');
module.exports = ({
          name: "ping",
          prototype: "slash",
          type: "interaction",
          code: `
          $interactionReply[**İşte Pingim \`$ping\`**;;;;everyone;false]`
});
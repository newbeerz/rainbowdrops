module.exports = {
  name: "oke",
  description: "sing karaoke!",
  args: true,
  execute(message, args) {
    let messagePlayer = "";
    let player = [];
    if (!message.mentions.users.size && !args[0].includes("<@!")) {
      messagePlayer = `${message.author} sings \nSong: ${args[1]}`;
    } else if (message.mentions.users.size && !args[0].includes("<@!")) {
      messagePlayer = `${message.author}`;
      message.mentions.users.forEach((user) => {
        if (user.username !== message.author.username) {
          messagePlayer += `, ${user}`;
          player.push(user.username);
        }
      });
    } else {
      message.channel.send(
        'Error! Please Try again. Can use ```"!help"``` for see all command!'
      );
      return;
    }

    const songEmbed = {
      color: 0x0099ff,
      title: "",
      url: "https://discord.js.org",
      author: {
        name: "Some name",
        icon_url: "https://i.imgur.com/wSTFkRM.png",
        url: "https://discord.js.org",
      },
      description: "Some description here",
      thumbnail: {
        url: "https://i.imgur.com/wSTFkRM.png",
      },
      fields: [
        {
          name: "Regular field title",
          value: "Some value here",
        },
        {
          name: "\u200b",
          value: "\u200b",
          inline: false,
        },
        {
          name: "Inline field title",
          value: "Some value here",
          inline: true,
        },
        {
          name: "Inline field title",
          value: "Some value here",
          inline: true,
        },
        {
          name: "Inline field title",
          value: "Some value here",
          inline: true,
        },
      ],
      image: {
        url: "https://i.imgur.com/wSTFkRM.png",
      },
      timestamp: new Date(),
      footer: {
        text: "Some footer text here",
        icon_url: "https://i.imgur.com/wSTFkRM.png",
      },
    };
    
    message.channel.send(messagePlayer);
    message.channel.send({ embed: songEmbed });
  },
};

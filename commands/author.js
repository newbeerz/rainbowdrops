module.exports = {
    name: "author",
    description: "show author!",
    args: true,
    execute(message, args) {
        const embed = {
            color: 0x0099ff,
            title: "NewbeerZ",
            description: "Pongsakorn Prawanna",
            thumbnail: {
              url: "https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.6435-9/182423526_3793223600804269_4367133611454983182_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeE4FbihXEk-zn7JmG9JdpikD03k09_91dsPTeTT3_3V22OVzG-RSFhB8fKK_yoPYgdkko1mkwZIBH6OdOvCwAZg&_nc_ohc=dE-5S66RALAAX-2xIQV&_nc_ht=scontent.fbkk9-2.fna&oh=36e7ec5f087536809536fdf3a82f5d7f&oe=60E3EA86",
            },
            fields: [
              {
                name: "Discord",
                value: "NeWBeeR#6310",
                inline: true,
              },
              {
                name: "Facebook",
                value: "NNewbeer PPongsakorn",
                inline: true,
              }
            ],
            timestamp: new Date(),
          };
          
          message.channel.send({ embed: embed });
    },
  };
  
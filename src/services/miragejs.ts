import { createServer } from "miragejs"

createServer({
  routes() {
    this.namespace = "api"
    
    const friends = [
      { 
        id: 1,
        name: "Dengosa",
        photo: "https://86cb8127dc14737f5057-7c0671222953158607ea93d5febd68b4.ssl.cf1.rackcdn.com/660/assets/responsive/489000/489354/dogingrass.jpg",
        age: 1,
        gender: "f"
      },
      {
        id: 2,
        name: "Madalena",
        photo: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2015/03/12214810/so-you-want-to-breed-dogs-500x500.jpg",
        age: 7,
        gender: "f"
      },
      {
        id: 3,
        name: "Isabel",
        photo: "https://i1.sndcdn.com/avatars-000560768412-fgpz9h-t500x500.jpg",
        age: 1,
        gender: "f"
      },
      {
        id: 4,
        name: "Pretinho",
        photo: "https://procaes.org.br/wp-content/uploads/2019/07/NIKON-D5200992-2-500x500.jpg",
        age: 3,
        gender: "m"
      },
      {
        id: 5,
        name: "Latifa",
        photo: "https://cdn.shopify.com/s/files/1/1238/6620/products/Dots-on-Blue-Dog_600x.jpg?v=1537565193",
        age: 6,
        gender: "f"
      },
      {
        id: 6,
        name: "Pipoca",
        photo: "https://yanhu3vvef11e7osn1qzldyb-wpengine.netdna-ssl.com/wp-content/uploads/2018/02/Frances-website-min-500x500.jpg",
        age: 1,
        gender: "f"
      },
      {
        id: 7,
        name: "Chico",
        photo: "https://lh3.googleusercontent.com/proxy/8B78va0DWxem2hTW06pEVsmTdq-xynnCFNlGcA7XYjYi1fm200_af0aVYbEyqV_JEATm_8RCkBPRYhr3KPnVlfT7YPD_ovzgQKamjbTz0dHyZZrBgBuREpHDGKfJ0fzB6jrX7q5ILVqZ",
        age: 4,
        gender: "m"
      },
      {
        id: 8,
        name: "Butão",
        photo: "https://i.pinimg.com/originals/75/31/23/753123d155120e874ed1e26aa87d5a55.png",
        age: 4,
        gender: "m"
      },
      {
        id: 9,
        name: "Romeu",
        photo: "https://procaes.org.br/wp-content/uploads/2019/07/DSC_0055-1-500x500.jpg",
        age: 2,
        gender: "m"
      },
      {
        id: 10,
        name: "Julieta",
        photo: "https://lh3.googleusercontent.com/proxy/zj8e1tEhUw_Fz81xy0VcMg0fosqkOvLGhZtZvj087RcvzmAPsg-6iEOMYhjWuLvOWYZVoC7x5NvLyY52c18UJLmN1OoEyNtRW5blMxCiOgT9PvbsvXuuNk6Csg",
        age: 3,
        gender: "f"
      },
      {
        id: 11,
        name: "Max",
        photo: "https://www.pedigree.com.br/adotar/uploads/history/195313_5d8da1d7-bbff-4c59-a107-d8336bf3facf.jpg",
        age: 5,
        gender: "m"
      },
      {
        id: 12,
        name: "Mia",
        photo: "https://lh3.googleusercontent.com/proxy/Nhb0BZfyry3HOOZiRIfHxpX_nxHg4RpN9AcLzFaQy1_gPA7yG8nXrZzqqtSJihp5lTJbBNifhD3dJL-CN4DMKHAiAVrfmloPzsu6r3VDUSOqCwYKvjnjkOITCPIBGq37",
        age: 2,
        gender: "f"
      }
    ]

    this.get("/friends", () => {
      return friends
    })
  },
})
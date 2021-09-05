import { api } from "../api";

export const createPost = async (account, img, text, tags) => {
    const form = new FormData();
    form.append("avatar", {
      uri: img,
      type: "image/jpeg",
      name: "popo.jpg",
    });
    const postA = await api.post("http://obnd.me:8000/profile", form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const url = "http://obnd.me:8000/get/" + postA.data;
    console.log(url);
    const res = await api.post("post-api/create-post", {
     {
        account: account,
        image: url,
        textDescription: text,
        tags: tags,
      },
     {
        headers: {
            "Content-Type": "application/json",
          }
     }
    );
}
import axios from "axios";

export async function getToken(): Promise<string> {
  try {
    const data = await axios({
      method: "POST",
      url: "https://api.ilovepdf.com/v1/auth",
      data: {
        public_key: process.env.PUBLIC_KEY,
      },
    });

    return data.data.token;
  } catch (e) {
    throw e;
  }
}

import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 4rkxAbjzDHhObqaLYz923uitF7d4N86c-0rRXkOFILa3X5BthnABtI3f4dK31jO07fqS0ISP7noUr_VX3soHTGjD_u_5uN3LWZ_bcdztp2A-KbM9wprnx43STfzoYnYx",
  },
});

const { default: axios } = require('axios');

module.exports = async () => {
  try {
    const res = await axios.get('http://127.0.0.1:1337/api/blogs');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
 
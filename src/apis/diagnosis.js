export const postDiagnosisFinish = async () => {
  try {
    const response = await axios.post(
      "https://moamoa.store/home/over-consumption",
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTczODQ4NjQ0OSwiZXhwIjoxNzQxMDc4NDQ5fQ.tccAfZ4LfshBl5S8n1lgj5pfrU9VybbNyulS7aZGXyc",
        },
      }
    );
    console.log(response.data.result);
  } catch (error) {
    console.error("Error fetching postDiagnosisFinish", error);
  }
};

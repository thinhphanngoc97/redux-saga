export default async () => {
    console.log("started change");

    const delay = new Promise(res => setTimeout(res, 5000));
    await delay.then((res) => {
        console.log("done change");
    });
}
export default function generateHash(len: number){

    const options ="abcdefghijklmnopqrstuvwxyz1234567890";
    const length = options.length;
    let ans: string="";

    for(let i=0; i<len; i++){
        ans += options[Math.floor(Math.random()*length)];
    }

    return ans;
}
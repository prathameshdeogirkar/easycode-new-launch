import connectdb from "@/lib/connectdb"

export const GET =async ({})=>{
     connectdb()
     return (Response.json({"hii":"hello"}))
}
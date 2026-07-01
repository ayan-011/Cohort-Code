import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    const body = await req.json();

    return NextResponse.json({username: "ayaan", email:"ayan@gmail.com"})
    
}
export async function POST(req: NextRequest){
    const body = await req.json();

    return NextResponse.json(body)
    
}
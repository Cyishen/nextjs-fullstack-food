import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";


export const PUT = async (req: NextRequest, {params}: {params: {id: string} } ) => {
    const  { id } = params;

    try {
        //獲取前端發送的資料
        const body = await req.json();
        // console.log('body status from fronted:', body)
        
        //更新資料庫中的資料
        await prisma.order.update({
            where: {
                id: id
            },
            data: { status: body},
        })

        return new NextResponse(JSON.stringify( {message:'Order has been updated'} ), { status: 200 } );
        
    } catch (error) {
        console.log(error);
        return new NextResponse(JSON.stringify( {message:'Something went wrong'} ), { status: 500 } );
    }
}
export type TBooking ={
    _id:string;
    date:Date,
     startTime:string,
     endTime:string,
     user:string,
     facility:Record<string | number,unknown>
     payableAmount:Number,
     isBooked: string

}
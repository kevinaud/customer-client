export interface Store {
    id: string;
    name: string;
    address: StoreAddress;
    hours: StoreHours;
    phoneNumber: string;
}

export interface StoreAddress {
    line1: string;
    line2: string;
    city: string;
    state: string;
    zip: string;
}

export interface StoreHours {
    mon: DayHours;
    tue: DayHours;
    wed: DayHours;
    thu: DayHours;
    fri: DayHours;
    sat: DayHours;
    sun: DayHours;
}

export interface DayHours {
    open: string;
    close: string;
}

export const mockStores = [
    {
        id: "1",
        name: "Central Texas Marketplace",
        address: {
            line1: "2448 W Loop 340",
            line2: "",
            city: "Waco",
            state: "TX",
            zip: "76711",
        },
        hours: {
            mon: { open: "10am", close: "9pm" },
            tue: { open: "10am", close: "9pm" },
            wed: { open: "10am", close: "9pm" },
            thu: { open: "10am", close: "9pm" },
            fri: { open: "10am", close: "9pm" },
            sat: { open: "10am", close: "9pm" },
            sun: { open: "11am", close: "6pm" }
        },
        phoneNumber: "254-662-9240"
    },
    {
        id: "2",
        name: "I35 Bellmead",
        address: {
            line1: "1517 N I 35 E",
            line2: "",
            city: "Bellmead",
            state: "TX",
            zip: "76705",
        },
        hours: {
            mon: { open: "10am", close: "9pm" },
            tue: { open: "10am", close: "9pm" },
            wed: { open: "10am", close: "9pm" },
            thu: { open: "10am", close: "9pm" },
            fri: { open: "10am", close: "9pm" },
            sat: { open: "10am", close: "9pm" },
            sun: { open: "11am", close: "6pm" }
        },
        phoneNumber: "254-412-1039"
    },
    {
        id: "3",
        name: "Lake Air Court",
        address: {
            line1: "1428 Wooded Acres Dr",
            line2: "",
            city: "Waco",
            state: "TX",
            zip: "76710",
        },
        hours: {
            mon: { open: "10am", close: "9pm" },
            tue: { open: "10am", close: "9pm" },
            wed: { open: "10am", close: "9pm" },
            thu: { open: "10am", close: "9pm" },
            fri: { open: "10am", close: "9pm" },
            sat: { open: "10am", close: "9pm" },
            sun: { open: "11am", close: "6pm" }
        },
        phoneNumber: "254-751-9162"
    }
];

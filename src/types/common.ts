export interface ProgramItemProps {
    position: "left" | "right";
    src: string;
    alt: string;
    title: string;
    time: string;
    keyValue?: string;
}


export interface QuestionItemProps {
    question: string;
    answer: string;
}

export enum TRAVELMETHOD {
    MYSELF = "Сам/На своём автомобиле",
    TRANSFER = "Трансфер",
}

export enum TWODAYSREADY {
    YES = "Да, планирую",
    NO = "Нет, не планирую",
    DONTKNOW = "Пока не знаю",
}
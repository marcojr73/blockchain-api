'use client';

import Blockchain from "@/app/components/Blockchain/Blockchain";
import { useState } from "react";
import Menu from "./components/Menu";

export default function Home() {
    const [step, setStep] = useState(EStep.MENU);

    return step === EStep.MENU ? <Menu callback={setStep}/> : <Blockchain />;
}

export enum EStep {
    MENU = 0,
    BLOCKCHAIN = 1,
}
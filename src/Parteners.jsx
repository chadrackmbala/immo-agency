import './App.css'
import { Amazon, Meta, Google, Microsoft, Deloitte, Apple, Ey, Presidence, Vodacom } from './images/index';

function Parteners() {
    return (
        <div className="bg-white py-5 overflow-hidden">
            <div className="flex flex-col items-center gap-5 max-w-5xl mx-auto">
                <h3 className="text-[16px] text-black">Nos partenaires</h3>

                {/* Container masqué */}
                <div className="w-full overflow-hidden">
                    {/* Bande qui défile */}
                    <div className="flex gap-8 animate-scroll w-max">
                        {/* Logos */}
                        <img src={Meta} alt="logo" className="w-[63px] h-[61px]" />
                        <img src={Google} alt="logo" className="w-[63px] h-[61px]" />
                        <img src={Microsoft} alt="logo" className="w-[63px] h-[61px]" />
                        <img src={Amazon} alt="logo" className="w-[63px] h-[61px]" />
                        <img src={Vodacom} alt="logo" className="w-[63px] h-[61px]" />
                        <img src={Presidence} alt="logo" className="w-[63px] h-[61px]" />
                        <img src={Ey} alt="logo" className="w-[63px] h-[61px]" />
                        <img src={Apple} alt="logo" className="w-[63px] h-[61px]" />
                        <img src={Deloitte} alt="logo" className="w-[63px] h-[61px]" />

                        {/* DUPLICATION (obligatoire pour effet infini) */}
                        <img src={Meta} alt="logo" className="w-[63px] h-[61px]" />
                        <img src={Google} alt="logo" className="w-[63px] h-[61px]" />
                        <img src={Microsoft} alt="logo" className="w-[63px] h-[61px]" />
                        <img src={Amazon} alt="logo" className="w-[63px] h-[61px]" />
                        <img src={Vodacom} alt="logo" className="w-[63px] h-[61px]" />
                        <img src={Presidence} alt="logo" className="w-[63px] h-[61px]" />
                        <img src={Ey} alt="logo" className="w-[63px] h-[61px]" />
                        <img src={Apple} alt="logo" className="w-[63px] h-[61px]" />
                        <img src={Deloitte} alt="logo" className="w-[63px] h-[61px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parteners;

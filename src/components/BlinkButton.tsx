import type { MouseEventHandler } from 'react';



interface BlinkButtonProps {
    text: string;
    func: MouseEventHandler<HTMLButtonElement> ;
    classname:string
}

const BlinkButton = ({ text, func,classname }: BlinkButtonProps) => (
    <button
        onClick={func}
        className={classname}
        style={{
            // boxShadow: '0 0 0 2px rgba(255,255,255,0.1)',
        }}
    >
        {text}
    </button>
);
export default BlinkButton
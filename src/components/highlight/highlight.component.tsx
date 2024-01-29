interface HighlightProps {
    color: string;

}

function Highlight({ color }: HighlightProps) {
    return (
        <svg viewBox="0 0 10 50">
            <path d="m4.94,45.22l-4.94,4.78V0l4.94,4.78c1.29,1.25,2.06,3.33,2.06,5.55v29.35c0,2.22-.77,4.3-2.06,5.55Z" fill={color} />
        </svg>
    )
}

export default Highlight
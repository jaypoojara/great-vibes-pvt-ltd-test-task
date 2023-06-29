import LoadingIcon from '../../assets/icons/loading-icon';

export enum BtnType {
    PRIMARY = "primary",
    SECONDARY = "secondary",
}

type Props = {
    text: string;
    disabled?: boolean;
    wrapperClass?: string;
    buttonClass?: string;
    onClick?: () => void;
    loading?: boolean | null;
    type: BtnType;
}

export default function StyledButton(props: Props) {

    const { text, disabled, wrapperClass = '', buttonClass = '', onClick, loading = false, type = BtnType.PRIMARY } = props;
    const isButtonDisabled = disabled ? disabled : loading ? loading : false;
    const styleBtnClass = `${type === "primary" ? "bg-primary text-white border-none" : "bg-white text-primary border border-primary"} ${buttonClass}`;
    const btnWrapper = `w-full flex ${wrapperClass}`;

    return (
        <div className={btnWrapper}>
            <button disabled={isButtonDisabled} onClick={() => onClick && onClick()} className={styleBtnClass}>
                {loading && <LoadingIcon />}
                <span className={`mx-2 font-family-arial font-medium text-16`}>{text}</span>
            </button>
        </div>
    )
}

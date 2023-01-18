const ButtonFilled = ({ children, type = "primary", disable = false, onClick = () => {} }) => {

    let color = '';

    switch (type) {
        
        case "secondary":

            color = 'bg-gray-500 hover:bg-gray-600 focus:bg-gray-600';

            break;

        case "success":

            color = 'bg-green-500 hover:bg-green-600 focus:bg-green-600';

            break;
        case "danger":

            color = 'bg-red-500 hover:bg-red-600 focus:bg-red-600';

            break;
        case "warning":

            color = 'bg-yellow-500 hover:bg-yellow-600 focus:bg-yellow-600';

            break;
        case "info":

            color = 'bg-purple-500 hover:bg-purple-600 focus:bg-purple-600';

            break;

        case "dark":

            color = 'bg-gray-700 hover:bg-gray-900 focus:bg-gray-900';

            break;

        default:
            
            color = 'bg-blue-500 hover:bg-blue-600 focus:bg-blue-600';
            
            break;
    }

    return (
        <button onClick={onClick} type="button" class={`focus:outline-none select-none text-white text-sm py-2.5 px-5 rounded-md ${color} hover:shadow-lg ${ !disable & 'cursor-not-allowed'}`}>{children}</button>
    );
}

export default ButtonFilled;
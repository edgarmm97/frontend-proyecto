import ButtonFilled from '../components/Buttons/ButtonFilled';


function Botones() {

    return (
        <div class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans py-6">
            <div class="container">
                <div class="card bg-white py-3 px-5 rounded-xl flex flex-col mb-5">
                    <div class="title text-xl font-medium">Filled</div>
                    <div class="w-full py-3">
                        <div class="inline-block mr-2 mt-2">
                            <ButtonFilled>Primary</ButtonFilled>
                        </div>
                        <div class="inline-block mr-2 mt-2">
                            <ButtonFilled type="secondary">Secondary</ButtonFilled>
                        </div>
                        <div class="inline-block mr-2 mt-2">
                            <ButtonFilled type="success">Success</ButtonFilled>
                        </div>

                        <div class="inline-block mr-2 mt-2">
                            <ButtonFilled type="danger">Danger</ButtonFilled>
                        </div>

                        <div class="inline-block mr-2 mt-2">
                            <ButtonFilled type="warning">Warning</ButtonFilled>
                        </div>

                        <div class="inline-block mr-2 mt-2">
                            <ButtonFilled type="info">Info</ButtonFilled>
                        </div>
                        
                        <div class="inline-block mr-2 mt-2">
                            <ButtonFilled type="dark">Dark</ButtonFilled>
                        </div>
            
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Botones;
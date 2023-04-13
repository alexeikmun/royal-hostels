
const FooterComponent = ({slim}:{ slim: boolean }) => 
    slim ? 
        <footer className="bg-white p-3 flex font-bold flex-col bg-b justify-center items-center fixed bottom-0 w-full z-[1]">
            <img src="assets/slim-logo.png" alt="" />
        </footer>
        : 
        <footer 
            className="bg-white p-3 flex font-bold flex-col text-[#502A18] justify-center items-center fixed bottom-0 w-full z-[1]" 
            style={{
                boxShadow: '0px 7px 20px gray'
            }}
        >
            <h4>
                Royal Hostels
            </h4>
            <p>
                ©Copyright 2023
            </p>
        </footer>

    

export default FooterComponent
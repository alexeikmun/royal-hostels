const FooterComponent = ({ slim }: { slim: boolean }) => (
  <footer
    className='bg-white p-3 flex font-bold flex-col text-[#502A18] justify-center items-center bottom-0 w-full z-[1] mt-4 fixed'
    style={{
      boxShadow: '0px 7px 20px gray',
    }}
  >
    <h4>Royal Hostels</h4>
    <p>©Copyright 2023</p>
  </footer>
);

export default FooterComponent;

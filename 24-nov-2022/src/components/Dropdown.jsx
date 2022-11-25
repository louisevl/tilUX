


function Dropdown() {

    return (
        <form id="dropdown">
            <div id="type_lokale">
                < select name="lokaledropdown" >
                    <option value="select">Vælg et lokale</option>
                    <option value="1">Klasselokale</option>
                    {/* <option value="2">Mødelokale</option> */}
                </select >
            </div >

            <div id="lokalenummer">
                <select name="lokaledropdown">
                    {/* <option value="select">Vælg et lokale</option> */}
                    <option value="1" >1</option>
                    <option value="2" >2</option>
                    <option value="3" >3</option>
                    <option value="4" >4</option>
                    <option value="5" >5</option>
                    <option value="6" >6</option>
                    <option value="7" >7</option>
                </select>
            </div>
        </form >
    );
}


export default Dropdown;
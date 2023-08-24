const axios = require('axios');


function settingOptions(){
    const url = 'http://online122.youth.seoul.kr/s_center/ajax.reservation_proc.php';

    //강의에 따른 변경
    const salesCode = '00100300077';
    const unitPrice = '47300';
    const cookie = 'PHPSESSID='
        + '4m3su2khmlkd1jnufpjfcartrk'
        + '; _ga=GA1.1.1908262919.1689579664; 342f86b2297eed1b3df8f15ce621c527=a2ltNjM4MjYzODI%3D; _ga_8Z1PVHFSHW=GS1.1.1690241638.4.1.1690241814.0.0.0';

    const headers = {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': cookie,
        'Host': 'online122.youth.seoul.kr',
        'Origin': 'http://online122.youth.seoul.kr',
        'Referer': 'http://online122.youth.seoul.kr/s_center/pro_view.php',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    };

    const data = new URLSearchParams();
    data.append('sales_code', salesCode);
    data.append('unit_price', unitPrice);
    data.append('first_start_day_yn', 'Y');
    data.append('monthqty', '01');
    data.append('repeat_lecture_yn', 'N');
    data.append('t_ea', '1');

    return{
        url : url,
        headers : headers,
        data : data,
    }
};

async function request(url, data, headers){

    const requestResult = await axios.post(url, data,{headers : headers})
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(error => {
            return console.error(error);
        });
};

const main = async () =>{
    const getSettingOptions = settingOptions();
    const {url, data, headers} = getSettingOptions;

    const requestResult = request(url, data, headers);
}

main();





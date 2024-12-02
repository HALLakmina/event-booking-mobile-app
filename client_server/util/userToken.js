import Cookies from 'universal-cookie';

const userToken = async () => {

    const cookies = new Cookies();
    const userLoginKey = await cookies.get('JWT_TOKEN')
    if(userLoginKey !== undefined)
    {
      return userLoginKey
    }
    else{
      return 0;
    }
}

export {userToken}

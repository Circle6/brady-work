import React from 'react';
import Button from '@mui/lab/LoadingButton'
import Axios from 'axios';

const Person = (props) => {

    const { name, favoriteColor, height } = props;
    const [isLoading, setIsLoading] = React.useState(false);
    const [says, setSays] = React.useState('');

    return (
        <div>
            Hi my name is {name} and my favorite color is {favoriteColor} and i am {height} tall
            <Button
                variant='contained'
                onClick={() => {
                    setIsLoading(true)
                    Axios.get(`http://localhost:9001/person/${name}`)
                        .then(response => {
                            console.log(response)
                            setSays(response.data)
                            setIsLoading(false)
                        })
                        .catch(error => {
                            console.error(error)
                            setIsLoading(false)
                        })
                    Axios.get(`http://localhost:9001/person/${name}`)
                        .then(response => {
                            console.log(response)
                            setSays(response.data)
                            setIsLoading(false)
                        })
                        .catch(error => {
                            console.error(error)
                            setIsLoading(false)
                        })
                }}
                color='primary'
                size='large'
                loading={isLoading}
            >
                See More
            </Button>
            {
                says && (
                    <>
                        <hr />
                        {name} is saying {says}
                        <hr />
                    </>
                )
            }
        </div>
    )
}

export default Person
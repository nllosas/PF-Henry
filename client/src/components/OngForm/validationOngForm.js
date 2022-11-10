import * as yup from 'yup';

const imgUrl= /(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?.*(png|jpg|jpeg|gif)$/gm;
const re = /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;
export const ongSchema = yup.object().shape({
    name: yup.string().required('Required Name'),
    description: yup.string().required('Required Description'),
    website: yup.string().matches(re,'please enter a valid URL'),
    address: yup.string().required('Required Address'),
    profilePic: yup.string().matches(imgUrl,'please enter a valid URL'),
    city: yup.string().required('Required City'),
    country: yup.string().required('Required Country'),
    goal: yup.number().positive().integer(),
})
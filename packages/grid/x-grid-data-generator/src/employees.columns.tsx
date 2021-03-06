import {
  generateName,
  randomAvatar,
  randomCity,
  randomCompanyName,
  randomCountry,
  randomCreatedDate,
  randomEmail,
  randomId,
  randomJobTitle,
  randomPhoneNumber,
  randomRating,
  randomUpdatedDate,
  randomUrl,
  randomUserName,
} from './services';
import { renderAvatar, renderCountry, renderEmail, renderLink, renderRating } from './renderer';

export const getEmployeeColumns: () => any[] = () => [
  {
    field: 'id',
    generateData: randomId,
    hide: true,
  },
  {
    field: 'avatar',
    headerName: 'Avatar',
    sortable: false,
    generateData: randomAvatar,
    renderCell: renderAvatar,
    filterable: false,
  },
  {
    field: 'name',
    headerName: 'Name',
    generateData: generateName,
    width: 120,
  },
  {
    field: 'website',
    headerName: 'Website',
    generateData: randomUrl,
    renderCell: renderLink,
    width: 160,
  },
  {
    field: 'rating',
    headerName: 'Rating',
    generateData: randomRating,
    renderCell: renderRating,
    width: 180,
    type: 'number',
  },
  {
    field: 'email',
    headerName: 'Email',
    generateData: randomEmail,
    renderCell: renderEmail,
    disableClickEventBubbling: true,
    width: 150,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    generateData: randomPhoneNumber,
    width: 150,
  },
  {
    field: 'username',
    headerName: 'Username',
    generateData: randomUserName,
    width: 150,
  },
  {
    field: 'city',
    headerName: 'City',
    generateData: randomCity,
  },
  {
    field: 'country',
    headerName: 'Country',
    generateData: randomCountry,
    renderCell: renderCountry,
    width: 150,
  },
  {
    field: 'company',
    headerName: 'Company',
    generateData: randomCompanyName,
    width: 180,
  },
  {
    field: 'position',
    headerName: 'Position',
    generateData: randomJobTitle,
    width: 180,
  },
  {
    field: 'lastUpdated',
    headerName: 'Updated on',
    generateData: randomUpdatedDate,
    type: 'dateTime',
    width: 180,
  },
  {
    field: 'dateCreated',
    headerName: 'Created on',
    generateData: randomCreatedDate,
    type: 'date',
    width: 150,
  },
];

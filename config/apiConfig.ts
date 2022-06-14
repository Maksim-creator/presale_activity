import axios from 'axios';
import camelcaseKeys from 'camelcase-keys';
import {baseUrl} from '../src/utils/constants';

const transformResponse = (data: string) => {
  try {
    if (data) {
      const json = JSON.parse(data);

      if (json === Object(json)) {
        return camelcaseKeys(json, {deep: true});
      }

      return json;
    }
    return '';
  } catch (e) {
    return '';
  }
};

const instance = axios.create({
  headers: {'Content-Type': 'application/json'},
  baseURL: baseUrl,
  transformResponse: [transformResponse],
});

const GET = instance.get;
const POST = instance.post;

export {GET, POST};

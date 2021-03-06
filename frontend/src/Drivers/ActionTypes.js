const GET_STOP_DATA = 'GET_STOP_DATA';
const GET_STOP_DATA_PENDING = `${GET_STOP_DATA}_PENDING`;
const GET_STOP_DATA_REJECTED = `${GET_STOP_DATA}_REJECTED`;
const GET_STOP_DATA_FULFILLED = `${GET_STOP_DATA}_FULFILLED`;
const GET_LEG_DATA = 'GET_LEG_DATA';
const GET_LEG_DATA_PENDING = `${GET_LEG_DATA}_PENDING`;
const GET_LEG_DATA_REJECTED = `${GET_LEG_DATA}_REJECTED`;
const GET_LEG_DATA_FULFILLED = `${GET_LEG_DATA}_FULFILLED`;
const GET_DRIVER_DATA = 'GET_DRIVER_DATA';
const GET_DRIVER_DATA_PENDING = `${GET_DRIVER_DATA}_PENDING`;
const GET_DRIVER_DATA_REJECTED = `${GET_DRIVER_DATA}_REJECTED`;
const GET_DRIVER_DATA_FULFILLED = `${GET_DRIVER_DATA}_FULFILLED`;
const GET_BONUSDRIVER_DATA = 'GET_BONUSDRIVER_DATA';
const GET_BONUSDRIVER_DATA_PENDING = `${GET_BONUSDRIVER_DATA}_PENDING`;
const GET_BONUSDRIVER_DATA_REJECTED = `${GET_BONUSDRIVER_DATA}_REJECTED`;
const GET_BONUSDRIVER_DATA_FULFILLED = `${GET_BONUSDRIVER_DATA}_FULFILLED`;

const ActionTypes = {
    GET_STOP_DATA,
    GET_STOP_DATA_REJECTED,
    GET_STOP_DATA_FULFILLED,
    GET_STOP_DATA_PENDING,
    GET_LEG_DATA,
    GET_LEG_DATA_REJECTED,
    GET_LEG_DATA_FULFILLED,
    GET_LEG_DATA_PENDING,
    GET_DRIVER_DATA,
    GET_DRIVER_DATA_REJECTED,
    GET_DRIVER_DATA_FULFILLED,
    GET_DRIVER_DATA_PENDING,
    GET_BONUSDRIVER_DATA,
    GET_BONUSDRIVER_DATA_REJECTED,
    GET_BONUSDRIVER_DATA_FULFILLED,
    GET_BONUSDRIVER_DATA_PENDING
};

export default ActionTypes;

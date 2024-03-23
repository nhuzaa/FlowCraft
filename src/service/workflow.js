import http from '../utils/http';
import {config, endpoints }from '../config';
import Swal from 'sweetalert2';

/**
 * Fetch all workflows.
 *
 * @param {{firstName: string}} options
 * @returns {object}
 */
export async function fetchWorkflows(options = {}) {
  const workflows = await http.get(endpoints.workflows, { });
  return workflows.data;
}

export async function createWorkflow(data) {
  try{
    const workflows = await http.post(endpoints.workflows, data);
    Swal.fire('Suces', workflows.data, 'success');
    return workflows.data;
  }catch (error){
      Swal.fire('Error ', error.message);
      return null
  }
}

export async function fetchNodesofWorkflow(id, options = {}) {
  const workflows = await http.get(endpoints.nodes(id),{ });
  return [workflows.data, workflows.status];
}

export async function saveNodesofWorkflow(id, data) {
  try{
    const workflows = await http.put(endpoints.nodes(id),data);
    Swal.fire( `data ${data}`, 'success');
    return [workflows.data, workflows.status];
  }catch (error){
      Swal.fire('Error ', error.message);
      return null
  }
}

export async function fetcWorflowLogs(id, options = {}) {
  const workflows = await http.get(endpoints.executions(id),{ });
  return workflows.data;
}


export async function executeWorkflow(id, data) {
  const workflows = await http.post(endpoints.executions(id), data);
  return workflows.data;
}

/**
 * Save an workflow.
 *
 * @param {object} workflow
 * @returns {object}
 */
export async function saveWorkflows(workflow) {
  const response = await http.post(endpoints.workflows, workflow);

  return response.data;
}

/**
 * Update an workflow.
 *
 * @param {object} workflow
 * @returns {object}
 */
export async function update(workflow) {
  const response = await http.put(`${config.endpoints.workflow}/${workflow.id}`, workflow);
  return response.data;
}

/**
 * Fetch workflow by id.
 *
 * @param {string} id
 * @returns {object}
 */
export async function fetchById(id) {
  const response = await http.get(`${config.endpoints.workflow}/${id}`);

  return response.data;
}


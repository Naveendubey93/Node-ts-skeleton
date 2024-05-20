import 'jest';
import express from 'express';
import { StatusCodes } from 'http-status-codes';
import request from 'supertest';
import IntegrationHelpers from '../helpers/Integration-helpers';

describe('status integration tests', () => {
	let app: express.Application;

	beforeAll(async () => {
		app = await IntegrationHelpers.getApp();
	});

	it('can get default route success', async () => {
		const response = await request(app)
			.get('/')
			.set('Accept', 'application/json')
			.expect('Content-Type', 'application/json; charset=utf-8');

		const { status } = response;
		expect(status).toBe(StatusCodes.OK);
	});

	it('can get default web route success', async () => {
		const response = await request(app)
			.get('/api')
			.set('Accept', 'application/json')
			.expect('Content-Type', /application\/json/);
		// .expect('Content-Type', 'text/html; charset=utf-8');
		const { status } = response;
		expect(status).toBe(StatusCodes.OK);
	});
});

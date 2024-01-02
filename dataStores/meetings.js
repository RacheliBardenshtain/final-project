
import { observable, computed, action, makeObservable, runInAction } from 'mobx';
import axios from "axios";
import { toBeRequired } from '@testing-library/jest-dom/matchers';

class Meetings {
    data = [{
        serviceName: "meeting",
        serviceDescription: "nice meeting",
        servicePrice: 100,
        dateTime: "1",
        clientName: "Racheli Bardenshtain",
        clientPhone: "0556737134",
        clientEmail: "berman4499@gmail.com"
    }];

    constructor() {
        makeObservable(this, {
            data: observable,
            getMeeting: computed,
            getCount: computed,
            addMeeting: action
        });
        this.fetchData();
    }

    fetchData() {
        fetch('http://localhost:8787/appointments').then(response => response.json()).then(data => {
            this.data = data;
        });
    }

    async addMeeting(m) {
        try {
            const response = await fetch("http://localhost:8787/appointment", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(m)
            });
            if (!response.ok) {
                console.error(`Error: ${response.status}`);
                return true;
            }
            return false;
        } catch (error) {
           console.error('Fetch error:', error);
            return false;
        }
    }

    get getMeeting() {
        return this.data;
    }

    get getCount() {
        return this.data.length;
    }
}

export default new Meetings();
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../user-class/user'
import { Repository } from '../Repository-class/repository'

import { environment } from '../../environments/environment'
@Injectable({
    providedIn: 'root'
})
export class UserRequestService {
    user: User;
    repository: Repository[];


    constructor(private http: HttpClient) {
        this.user = new User("", "", "", 0, 0, 0, "", new Date())
        this.repository = []

    }
    userRequest(userInput) {

        var userName = userInput;

        interface ApiResponse {
            name: string;
            avatar_url: string;
            location: string;
            followers: number;
            following: number;
            public_repos: number;
            html_url: string;



        }

        let promise = new Promise((resolve, reject) => {
            this.http.get<ApiResponse>('https://api.github.com/users/' + userName + '?access_token=' + environment.apikey).toPromise().then(response => {

                this.user.name = response.name
                this.user.avatar_url = response.avatar_url
                this.user.location = response.location
                this.user.followers = response.followers
                this.user.following = response.following
                this.user.public_repos = response.public_repos
                this.user.html_url = response.html_url


                resolve()
            },
                error => {
                    this.user.name = "Sorry the user name can not be found!"
                    this.user.avatar_url = "??????????????????????"

                    reject(error)
                }
            )
        })

        return promise

    }

    repositoryrequest(userInput) {

        var userName = userInput;

        interface ApiReposito {
            name: string;
            description: string;



        }

        let promises = new Promise((resolve, reject) => {
            this.http.get<ApiReposito>('https://api.github.com/users/' + userName + '/repos?access_token=' + environment.apikey).toPromise().then(response => {
                for (var i in response) {
                    console.log(i)
                    this.repository.push(new Repository(response[i].name, response[i].description))
                }

                resolve()
            },
                error => {

                    reject(error)
                }
            )
        })

        return promises
    }
}
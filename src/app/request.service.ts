import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Observable } from 'rxjs/Observable';

@Injectable()

export class RequestService {
    constructor(private http: Http) {}

    private domain = "https://fbapp.brm.com.co/Unilever/weekplayer/";

    public post(url:string, parameters:any, file:boolean = false, accion?:string, sucessCb?:any, errCb?:any) {
        let result = (accion) ? "?accion="+accion : "";
		
		url = "https://fbapp.brm.com.co/unilever/weekplayer/"+ url;
		
        let headers:any;
        let param:any;
        let options:any;
        if (file) {
            param = parameters;
        }else{
            headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded' });
            param = this.serialized(parameters);
            options = new RequestOptions({ headers: headers, method: "post" });
        }
        
        return this.http.post(url, param, options)
            .map((res: Response) =>{
				let body = res.json();
				if(body.status_code==0){
					return Observable.throw('Error en la url');
				}
				this.operateBug(body, sucessCb, errCb);
                return body || { };
            })
            .catch(this.handleError);
    }

    public get(url:string, parameters?:any, accion?:any) {
        let url += url;
        let result = (accion) ? "?accion="+accion : "";

            url = this.domain + url;
            let headers:any;
            let options:any;

             console.warn(url);   
        
       return this.http.get(url, {params:parameters})
               
            .map(this.extractData)     

        /*let result = (accion) ? "?accion="+accion : "";		
		
		let options:any;
        
        return this.http.get(fUrl, null)
            .map(this.extractData)            
            .catch(this.handleError);*/
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }
    
    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    }

    private serialized(obj:any){
        let result = [];
        for (let property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    }

    private operateBug(req, sucess?:any, err?:any){        
        if(req.status=="success"){
            if(sucess) sucess(req);
        }else if(req.status=="error"){
			if(err) err(req);				
        }
    }

}

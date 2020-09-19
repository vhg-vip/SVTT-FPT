import { Component, OnInit } from '@angular/core';
import { UserEntity } from '../../Modules/User/User.Entity';
import { UserService } from '../../Modules/User/User.Service';
import { UserSearchEntity } from '../../Modules/User/User.SearchEntity';
import { ToasterService } from '../../Share/CustomToaster';
import { TreeNodeService } from '../../Modules/User/TreeNode.Service';
// import { TreeNode } from '../../Modules/User/TreeNode.Entity';
import { LoaderService } from '../../Share/Loading/Loader.service';
import { CommonComponent } from '../../app.component';
import { page } from '../../Share/Paging/Page';
import { sha256 } from 'js-sha256'
import { forge } from 'node-forge'
import { InputCustomComponent } from '../../Share/InputCustom/InputCustom.component'
import { AbstractControl, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TreeNode, TreeDragDropService } from 'primeng/api';

@Component({
    templateUrl: 'table.component.html',
    providers: [TreeDragDropService]
})
export class TableComponent extends CommonComponent<UserEntity> implements OnInit{
    UserSearchEntity: UserSearchEntity = new UserSearchEntity();
    searchEntity: UserSearchEntity = new UserSearchEntity();
    UserEntity: UserEntity = new UserEntity();
    UserEntities: UserEntity[] = [];
    Users: UserEntity[] = [];
    searchId: number;
    SelectedUser: UserEntity = new UserEntity();
    DataPost: UserEntity = new UserEntity;
    addUser: boolean;
    Loader: boolean;
    page: page = new page();
    sha256 = require('js-sha256').sha256;
    ErrorId: boolean;
    ErrorDisplay: boolean;
    ErrorName: boolean;

    formGroup: FormGroup;
    provinceControl = new FormControl();

    // forge = require('node-forge');
    // rsa = this.forge.pki.rsa;
    // keypair = this.rsa.generateKeyPair({bits: 2048, e: 0x10001});
    // state = this.rsa.createKeyPairGenerationState(2048, 0x10001);

    constructor(public UserService: UserService,
        public toastr: ToasterService,
        public nodeService: TreeNodeService,
        public loadingService: LoaderService,
        public fb: FormBuilder,
        public route: ActivatedRoute,
        public router: Router) {
        super(UserService, toastr)
        this.getUser();
        this.getTreeNode();
    }

    ngOnInit(){
        this.formGroup = this.fb.group({
            province: [null]
        })
        this.getFile()
    }

    // step = function(){ 
    //     if(!this.rsa.stepKeyPairGenerationState(this.state ,100)){
    //         setTimeout(this.step,1);
    //         // console.log(this.keypair);
    //         var encrypted = this.state.publicKey.encrypt('abc');
    //         console.log(encrypted);
    //     }
    //     else{
    //     }
    // }

    // rsaEncrypt() {
    //     this.rsa.generateKeyPair({bits: 2048, workers: 2}, function (err, keypair) {        
    //     });
    //     setTimeout(this.step);
    //     var md = this.forge.md.sha1.create();
    //     md.update('sign this', 'utf-8');
    // }

    // kiem tra o input
    Validate(){
        this.checkError(this.DataPost.id, this.DataPost.Errors, 'IdError', '*Dien ID vao o trong');
        this.checkError(this.DataPost.display, this.DataPost.Errors, 'DisplayError', '*Dien Display vao o trong');
        this.checkError(this.DataPost.name, this.DataPost.Errors, 'NameError', '*Dien ten vao o trong');
    }

    // get tat ca du lieu ra
    getUser() {
        
        this.Get(this.UserSearchEntity).then((result: UserEntity[]) => {
            this.UserEntities = result;
            // console.log(result);
        });
    }

    // tao 1 user moi
    PostData() {
        // this.DataPost.name = sha256(this.DataPost.name);
        // this.DataPost.display = sha256(this.DataPost.display);
        this.Validate();
        if(this.checkEmptyObject(this.DataPost.Errors)){
            this.Create(this.DataPost);
            this.getUser();
            this.addUser = false;
        }
        // console.log(this.DataPost);
    }

    getId(selectedUser: UserEntity) {
        this.searchId = selectedUser.id;
        this.SelectedUser = selectedUser;
        console.log(selectedUser);
    }
    DeleteUser(user: UserEntity) {
        this.Delete(user);
        this.getUser();
    }

    editUser(user: UserEntity) {
        this.SelectedUser = JSON.parse(JSON.stringify(user));
        user.isEdit = true;
    }

    save(user: UserEntity) {
        this.Updates(user);
        user.isEdit = false;

    }

    Cancel(i) {
        this.UserEntities[i].isEdit = false;
        this.UserEntities[i] = this.SelectedUser;
    }

    addNew() {
        this.DataPost = new UserEntity();
        this.addUser = !this.addUser;
    }

    // tree table
    treeNode: TreeNode[] = [];
    files: TreeNode[];
    files2: TreeNode[];
    loading: boolean;
    cols: any[] = [
        { field: 'name', header: 'Name' },
        { field: 'size', header: 'Size' },
        { field: 'type', header: 'Type' }
    ];
    getTreeNode() {
        this.nodeService.Gets().subscribe(p => {
            this.treeNode = p;
        })
    }

    getFile(){
        this.nodeService.getFiles().then( f => {
            this.files = f;
            // console.log(this.files)
        });
        this.nodeService.getFiles().then( f2 => this.files2 = f2);

    }

}
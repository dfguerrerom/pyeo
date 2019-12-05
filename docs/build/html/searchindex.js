Search.setIndex({docnames:["array_utilities","classification","coordinate_manipulation","filesystem_utilities","index","queries_and_downloads","raster_manipulation","validation"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":2,sphinx:56},filenames:["array_utilities.rst","classification.rst","coordinate_manipulation.rst","filesystem_utilities.rst","index.rst","queries_and_downloads.rst","raster_manipulation.rst","validation.rst"],objects:{"pyeo.apps.change_detection":{image_comparison:[4,0,0,"-"],rolling_composite_s2_change_detection:[4,0,0,"-"],simple_s2_change_detection:[4,0,0,"-"]},"pyeo.apps.masking":{filter_by_class_map:[4,0,0,"-"]},"pyeo.apps.model_creation":{create_model_from_region:[4,0,0,"-"]},"pyeo.array_utilities":{project_array:[0,1,1,""]},"pyeo.classification":{autochunk:[1,1,1,""],change_from_composite:[1,1,1,""],classify_directory:[1,1,1,""],classify_image:[1,1,1,""],create_model_for_region:[1,1,1,""],create_model_from_signatures:[1,1,1,""],create_trained_model:[1,1,1,""],extract_features_to_csv:[1,1,1,""],get_training_data:[1,1,1,""],load_signatures:[1,1,1,""],raster_reclass_binary:[1,1,1,""],reshape_ml_out_to_raster:[1,1,1,""],reshape_prob_out_to_raster:[1,1,1,""],reshape_raster_for_ml:[1,1,1,""]},"pyeo.coordinate_manipulation":{align_bounds_to_whole_number:[2,1,1,""],check_overlap:[2,1,1,""],floor_to_resolution:[2,1,1,""],get_aoi_bounds:[2,1,1,""],get_aoi_intersection:[2,1,1,""],get_aoi_size:[2,1,1,""],get_combined_polygon:[2,1,1,""],get_local_top_left:[2,1,1,""],get_poly_bounding_rect:[2,1,1,""],get_poly_intersection:[2,1,1,""],get_poly_size:[2,1,1,""],get_raster_bounds:[2,1,1,""],get_raster_intersection:[2,1,1,""],get_raster_size:[2,1,1,""],multiple_intersection:[2,1,1,""],multiple_union:[2,1,1,""],pixel_bounds_from_polygon:[2,1,1,""],pixel_to_point_coordinates:[2,1,1,""],point_to_pixel_coordinates:[2,1,1,""],reproject_geotransform:[2,1,1,""],reproject_vector:[2,1,1,""],write_geometry:[2,1,1,""]},"pyeo.filesystem_utilities":{check_for_invalid_l1_data:[3,1,1,""],check_for_invalid_l2_data:[3,1,1,""],clean_aoi:[3,1,1,""],clean_l2_data:[3,1,1,""],clean_l2_dir:[3,1,1,""],create_file_structure:[3,1,1,""],get_change_detection_dates:[3,1,1,""],get_image_acquisition_time:[3,1,1,""],get_l1_safe_file:[3,1,1,""],get_l2_safe_file:[3,1,1,""],get_mask_path:[3,1,1,""],get_preceding_image_path:[3,1,1,""],get_pyeo_timestamp:[3,1,1,""],get_related_images:[3,1,1,""],get_sen_2_baseline:[3,1,1,""],get_sen_2_granule_id:[3,1,1,""],get_sen_2_image_orbit:[3,1,1,""],get_sen_2_image_tile:[3,1,1,""],get_sen_2_image_timestamp:[3,1,1,""],get_sen_2_tiles:[3,1,1,""],init_log:[3,1,1,""],is_tif:[3,1,1,""],sort_by_timestamp:[3,1,1,""]},"pyeo.queries_and_downloads":{activate_and_dl_planet_item:[5,1,1,""],build_search_request:[5,1,1,""],check_for_s2_data_by_date:[5,1,1,""],do_quick_search:[5,1,1,""],do_saved_search:[5,1,1,""],download_blob_from_google:[5,1,1,""],download_from_aws_with_rollback:[5,1,1,""],download_from_google_cloud:[5,1,1,""],download_from_scihub:[5,1,1,""],download_planet_image_on_day:[5,1,1,""],download_s2_data:[5,1,1,""],filter_non_matching_s2_data:[5,1,1,""],filter_to_l1_data:[5,1,1,""],filter_to_l2_data:[5,1,1,""],get_granule_identifiers:[5,1,1,""],get_paginated_items:[5,1,1,""],get_planet_product_path:[5,1,1,""],get_query_datatake:[5,1,1,""],get_query_granule:[5,1,1,""],get_query_level:[5,1,1,""],get_query_processing_time:[5,1,1,""],load_api_key:[5,1,1,""],planet_query:[5,1,1,""],read_aoi:[5,1,1,""],sent2_query:[5,1,1,""]},"pyeo.raster_manipulation":{apply_array_image_mask:[6,1,1,""],apply_band_function:[6,1,1,""],apply_fmask:[6,1,1,""],apply_sen2cor:[6,1,1,""],atmospheric_correction:[6,1,1,""],average_images:[6,1,1,""],buffer_mask_in_place:[6,1,1,""],build_sen2cor_output_path:[6,1,1,""],clip_raster:[6,1,1,""],combine_masks:[6,1,1,""],composite_directory:[6,1,1,""],composite_images_with_mask:[6,1,1,""],create_mask_from_class_map:[6,1,1,""],create_mask_from_confidence_layer:[6,1,1,""],create_mask_from_model:[6,1,1,""],create_matching_dataset:[6,1,1,""],create_new_image_from_polygon:[6,1,1,""],create_new_stacks:[6,1,1,""],filter_by_class_map:[6,1,1,""],flatten_probability_image:[6,1,1,""],get_image_resolution:[6,1,1,""],get_masked_array:[6,1,1,""],get_sen2cor_version:[6,1,1,""],get_sen_2_band_path:[6,1,1,""],mosaic_images:[6,1,1,""],open_dataset_from_safe:[6,1,1,""],preprocess_landsat_images:[6,1,1,""],preprocess_sen2_images:[6,1,1,""],raster_sum:[6,1,1,""],raster_to_array:[6,1,1,""],reproject_directory:[6,1,1,""],reproject_image:[6,1,1,""],resample_image_in_place:[6,1,1,""],save_array_as_image:[6,1,1,""],stack_and_trim_images:[6,1,1,""],stack_image_with_composite:[6,1,1,""],stack_images:[6,1,1,""],stack_old_and_new_images:[6,1,1,""],stack_sentinel_2_bands:[6,1,1,""],trim_image:[6,1,1,""]},"pyeo.validation":{allocate_category_sample_sizes:[7,1,1,""],build_class_dict:[7,1,1,""],cal_total_sample_size:[7,1,1,""],calc_minimum_n:[7,1,1,""],count_pixel_classes:[7,1,1,""],part_fixed_value_sampling:[7,1,1,""],produce_stratified_validation_points:[7,1,1,""],save_point_list_to_shapefile:[7,1,1,""],save_validation_maifest:[7,1,1,""],stratified_random_sample:[7,1,1,""]},pyeo:{array_utilities:[0,0,0,"-"],classification:[1,0,0,"-"],coordinate_manipulation:[2,0,0,"-"],filesystem_utilities:[3,0,0,"-"],queries_and_downloads:[5,0,0,"-"],raster_manipulation:[6,0,0,"-"],validation:[7,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:function"},terms:{"002m":6,"10m":[3,4,6],"1pm":4,"20190613t123002":5,"20201227t130000":4,"27th":4,"2gb":[],"432df":5,"48mxu":5,"4dfb4":5,"boolean":1,"break":1,"class":[1,4,6,7],"default":[1,5,6],"export":[],"final":6,"float":2,"function":[1,2,3,4,6,7],"import":[4,5],"int":5,"long":[4,5],"new":[0,1,2,5,6],"public":5,"return":[0,1,2,3,5,6,7],"true":[1,2,3,5,6],"try":4,ANDs:6,AWS:5,For:[1,2,4,5,6],ORs:6,One:2,SRS:2,The:[1,2,5,6,7],There:5,These:2,USE:[],Use:6,Used:2,Uses:2,Using:6,Will:[1,3,5,6],With:4,_class:1,_prob:1,a_nodata:[],about:5,absolut:6,accept:7,access:5,account:5,accuari:7,accuraci:7,achiev:7,acquisit:[],activ:[4,5],activate_and_dl_planet_item:5,adapt:6,add:[],adjac:[],affect:3,affinin:2,after:5,after_d:3,algorithm:[4,6],align:[2,6],align_bounds_to_whole_numb:2,all:[1,2,3,4,5,6],alloc:7,allocate_category_sample_s:7,allocate_typ:7,alon:6,along:0,alreadi:[1,3],also:[5,6,7],amazon:5,amount:[1,6],anaconda:4,analysi:1,analyt:5,ani:[1,2,3,4,5,6],aoi:[2,4,5,6],aoi_dir:3,aoi_path:[4,5,6],api:5,api_kei:5,app:4,append:[],appli:[1,4,6],apply_array_image_mask:6,apply_band_funct:6,apply_fmask:6,apply_mask:1,apply_sen2cor:6,appropri:1,approxim:7,apriori:7,arbitrari:6,area1:1,area2:1,area:[1,2,4,5],arrai:[0,1,2,6],array_in:0,array_util:4,arriv:1,asset:5,asset_typ:5,associ:[1,4,5,6],assum:[1,2,4,6],assumt:4,atmospher:4,atmospheric_correct:6,attempt:5,attribut:1,auto:5,autochunk:1,automat:[1,5],avail:[1,5],average_imag:6,avoid:[2,5],aws:5,axi:0,b02:6,b03:6,b04:6,b08:6,back:[5,6],backward:[],bad:5,baddatasourc:5,balanc:1,band:[1,3,4,5,6],band_input_a:6,band_input_b:6,base:4,baselin:[3,6],bashrc:[],basic:4,becaus:[],becom:[1,6],been:4,befor:[4,5],before_d:3,begin:5,behavior:6,being:[1,3],between:[2,4,5,7],bgr:6,bgri:6,bin:[],binari:6,blue:1,boarder:2,book:6,bootstrap:1,both:[2,5],bound:2,boundari:2,bounding_box:2,box:2,branch:[],broken:1,bucket:5,buffer_mask_in_plac:6,buffer_s:6,build:[4,5],build_class_dict:7,build_search_request:5,build_sen2cor_output_path:6,built:6,cal_total_sample_s:7,calc_minimum_n:7,calcul:[1,2,5,7],call:[1,2,3,4,6],can:[2,3,4,5,6,7],care:6,categori:1,cehck_for_s2_data_by_d:5,centr:7,certain:7,certainti:[],chang:[1,4,6],change_detect:4,change_from_composit:1,charact:5,charg:5,check:3,check_for_invalid_l1_data:3,check_for_invalid_l2_data:3,check_for_s2_data_by_d:5,check_overlap:2,checkout:[],chmod:[],chri:6,chunk:1,class_arrai:7,class_count:7,class_label:1,class_map:4,class_map_path:6,class_out_dir:1,class_out_path:1,class_sample_count:7,class_sample_point_dict:7,class_total_s:7,class_weight:1,classes_of_interest:6,classif:[4,6],classifi:[1,4],classify_directori:1,classify_imag:[1,4,6],clcr:4,clean_aoi:3,clean_l2_data:3,clean_l2_dir:3,clear:6,clip:6,clip_rast:6,clone:4,cloud:[4,5,6],cloud_conf_threshold:6,cloud_cov:5,cloud_threshold:6,cloudi:6,cloudmask:6,clover:5,code:[1,5],collect:4,column:1,com:[4,5],combin:[2,4,6],combination_func:6,combine_mask:6,compar:3,compat:[1,6],complex:5,compon:6,composit:[1,3,4,6],composite_:6,composite_directori:6,composite_images_with_mask:6,composite_out_dir:6,composite_out_path:6,composite_path:[1,6],composite_tile_timestamp:6,composite_timestamp:6,concurr:5,conda:4,conf:[4,5],confid:6,configur:[4,5],consid:[],consist:2,contai:5,contain:[0,1,2,3,4,5,6,7],content:4,contigu:4,contin:5,continu:4,convent:4,convert:6,coolearth:7,coord:7,coordin:[2,4,7],coordinate_manipul:4,coorin:2,copernicu:5,copi:6,core:1,corner:2,correct:[4,6],correspond:[1,2,6],count:7,count_pixel_class:7,cover:[1,2,4,5,6],cpu:1,creat:[1,2,3,4,6,7],create_combined_mask:6,create_file_structur:3,create_mask_from_class_map:6,create_mask_from_confidence_lay:6,create_mask_from_model:6,create_matching_dataset:6,create_model_for_region:1,create_model_from_rast:1,create_model_from_signatur:[1,4],create_new_image_from_polygon:6,create_new_stack:[4,6],create_trained_model:1,createonli:[],creation:1,criterion:1,cross:1,cross_val_repeat:1,csv:[1,4,7],current:6,custom:1,data:[0,1,2,4,6,7],dataset:[1,2,6],datasourc:5,datatak:[5,6],datatyp:[1,6],date:[3,4,5,6],datetim:[3,5],dbx:1,ddthh:5,deafult:6,decemb:4,decompos:6,defin:[2,4],delet:3,delete_unprocessed_imag:6,demo:4,depend:[4,6],depth:0,deserialis:4,desir:7,desired_standard_error:7,dest_sr:2,detail:[1,5],detect:[4,6],dhu:5,dict:[5,7],dictionari:[5,7],differ:6,dimens:[0,6],dimension:[1,6],directori:[1,3,4,5,6],disconnect:3,disk:[1,6],distribut:4,divis:2,do_post_resampl:6,do_quick_search:5,do_saved_search:5,doc:[1,5,6],document:1,doe:[3,5,6],doesn:[3,5],don:3,done:[],doubt:5,down:[2,6],download:4,download_blob_from_googl:5,download_from_aws_with_rollback:5,download_from_google_cloud:5,download_from_scihub:5,download_planet_image_on_dai:5,download_s2_data:5,driver:6,drop:[],dummi:5,dump:4,each:[1,2,4,5,6,7],earth:4,echo:[],ect:[4,6],edg:6,effici:1,either:[5,6],element:2,els:6,empti:6,end:[1,3,5,6],end_dat:5,ens:1,entir:5,entri:[],env:4,environ:4,epsg:[2,6],equal:[6,7],equat:2,error:[1,2,4,5,7],esa:[4,5],estim:7,everi:[1,3,4,6],exampl:[1,4,5,6],execut:6,exist:[1,3,6],exmapl:5,expand:6,expected_accuraci:7,experiment:[1,5],expess:7,explor:4,extens:[3,4,6],extent:6,extra:0,extract:[1,3],extract_features_to_csv:1,extract_signatur:4,extratreesclassifi:1,fail:4,failur:5,fals:[1,2,5,6,7],faster:1,featur:[1,2,5],feature_count:1,featurecollect:5,fetch:5,few:[1,5],field:[1,4,6],file:[1,2,3,4,6,7],file_path:5,filenam:[3,4,5,6],filepath:[1,3,5],filesystem:3,filesystem_util:[],fill:4,fill_valu:6,filter:[4,5,6],filter_by_class_map:6,filter_class:4,filter_map_path:6,filter_non_matching_s2_data:5,filter_to_l1_data:5,filter_to_l2_data:5,finish:6,first:[3,5,6],fit:1,five:5,flatten:6,flatten_probability_imag:6,floor:6,floor_to_resolut:2,fmask:6,fmask_command:6,fmask_sentinel2stack:6,folder:[1,3,5,6],folllow:4,follow:[1,2,4,5,6,7],forest_sentinel:4,form:[1,2,5,6],format:[1,3,4,5,6],formula:2,found:[5,6],four:2,frankfurt:5,free:[4,5,6],from:[1,2,3,4,5,6,7],fulfil:7,full:[1,5,6,7],fulli:[],further:[1,5],furthest:6,gdal:[1,2,3,4,6],gdal_datamodel:2,gdal_imag:2,gdal_merg:[],gdalwarp:6,gdt_byte:6,gdt_cfloat32:6,gdt_cfloat64:6,gdt_cint16:6,gdt_cint32:6,gdt_float32:6,gdt_float64:6,gdt_int16:6,gdt_int32:6,gdt_uint16:6,gdt_uint32:6,gdt_unknown:6,gener:[3,4,6],generate_date_imag:6,geo:6,geograph:2,geojson:[4,5],geojsonfil:5,geometri:[2,6],geometry_func:6,geometry_mod:[2,6],geoprocess:6,georast:2,geospati:[4,6],geotif:[1,4,6],geotiff:[4,6],geotransform:[2,6,7],geotrasform:2,gerard:6,get:[1,2,3,5,6,7],get_aoi_bound:2,get_aoi_intersect:2,get_aoi_s:2,get_change_detection_d:3,get_combined_polygon:2,get_granule_identifi:5,get_image_acquisition_tim:3,get_image_resolut:6,get_l1_safe_fil:3,get_l2_safe_fil:3,get_local_top_left:2,get_mask_path:3,get_masked_arrai:6,get_paginated_item:5,get_planet_product_path:5,get_poly_bounding_rect:2,get_poly_intersect:2,get_poly_s:2,get_preceding_image_path:3,get_pyeo_timestamp:3,get_query_datatak:5,get_query_granul:5,get_query_level:5,get_query_processing_tim:5,get_raster_bound:2,get_raster_intersect:2,get_raster_s:2,get_related_imag:3,get_sen2cor_vers:6,get_sen_2_band_path:6,get_sen_2_baselin:3,get_sen_2_granule_id:3,get_sen_2_image_orbit:3,get_sen_2_image_til:3,get_sen_2_image_timestamp:3,get_sen_2_til:3,get_training_data:1,getgeotransform:2,getvirtualmemarrai:[],ggal:6,gini:1,git:4,github:4,give:6,given:[1,2,5,6,7],going:1,google_cloud:5,granul:[3,5,6],granule_id:5,greater:5,green:1,group:6,gtiff:[1,6],guarante:3,guid:5,handler:3,has:[1,6],have:[1,3,4,5,6],haze:6,height:[1,2,4,6],help:6,here:[1,5],high:7,highest:[],home:5,host:[1,5],hour:5,how:1,html:[1,2,6],http:[2,4,5,6],hub:5,human:5,ideal:4,ident:[4,5],identif:5,identifi:[5,6],identifit:6,ignor:[1,6,7],illustr:4,imaag:6,imag:[1,2,3,4,5,6],image_1:4,image_2:4,image_arrai:1,image_dir:[3,6],image_nam:3,image_path:[1,3,6],image_str:3,imageri:[3,4,5],images_to_keep:3,img_data:5,img_path:1,importfromwkt:2,imput:6,in_dataset:6,in_dir:[1,6],in_directori:6,in_gt:2,in_path:[2,6],in_ras_path:1,in_rast:6,in_raster_path:6,in_raster_path_list:6,in_safe_dir:6,includ:[1,3,4,5,6],inclus:5,incomplet:5,index:[1,6],indic:1,indici:2,inform:[2,5],ini:4,init:[],init_log:3,initi:[4,6],input:[1,2,6],input_fil:[],input_imag:4,input_nam:1,inrstlist:6,insid:[5,6],instersect:6,int32:1,intake_d:5,integ:1,intend:4,interest:2,interim:4,intern:4,interrupt:5,intersect:[2,6],intoak:5,introduct:[5,6],invalid:[1,3],invert_stack:6,is_tif:3,iso:5,issu:6,item:5,item_typ:5,iter:2,its:[2,4,5,6],joblib:4,jp2:[4,5],json:[5,7],just:[],kei:5,kept:4,knowledg:7,known:2,known_text_representation_of_geometri:2,l1_dir:[3,5,6],l1_safe_fil:3,l1c:5,l2_dir:[3,5,6],l2_safe_dir:6,l2_safe_fil:3,l2_safe_path:6,l2a:[4,5,6],l2a_:5,l2b:5,label:[1,4],landsat:6,larg:5,largest:2,last:[3,4,6],last_dat:4,lat:4,latest_imag:[],layer:[2,6],learn:[1,4],leav:[5,6],left:2,length:1,less:5,let:5,level:[1,5,6],librari:[1,2,4,5],like:[1,5],limit:5,line:[4,5],linux:4,list:[1,2,3,5,6,7],load:4,load_api_kei:5,load_signatur:1,local:4,locat:[1,2,4,6],log:3,log_path:3,lot:7,low:1,lrx:[],lry:[],mac:4,machin:[1,4],made:[4,5],mai:[2,4,6],make:6,manipul:[0,1,4],map:[1,6,7],map_path:7,mask:[1,3,6],mask_path:6,masked_arrai:6,match:6,mathemt:6,max_featur:1,maximem:5,maximum:[1,5,6],mayb:4,mean:1,meet:4,mem:7,mem_limit:1,memori:[1,6,7],merg:[3,4],merge_rast:6,metadata:[5,6],meter:[4,6],method:1,metr:6,mid:5,might:5,min_samples_leaf:1,min_samples_split:1,miniconda:4,minimum:4,miss:1,mission:6,model:[1,6],model_clear:6,model_out:1,model_path:[1,6],modul:6,moment:5,more:[1,2,5],mosaic:[4,6],mosaic_imag:6,most:[1,3,4],move:7,msi:5,msil2a:6,msk:[1,3,4,6],multi:6,multipl:[2,6],multiple_intersect:2,multiple_union:2,multipli:4,multiplicat:6,must:6,my_class_map:4,my_imag:4,my_output_imag:4,my_sat_imag:4,mywkt:2,n0206:6,n_class:1,n_classes_:1,n_core:1,n_estim:1,n_job:1,n_pixel:1,name:[1,2,3,4,5,6],nativ:6,nearest:2,need:[4,5,6,7],nest:5,new_data:5,new_data_polygon:[],new_image_nam:[],new_image_path:6,new_proj_wkt:2,new_project:6,new_r:6,newest:3,next:6,no_data:7,nodata:[1,6],nodata_valu:[],non:[2,5,6],none:[1,3,5,6,7],nonzero:1,normal:5,north:2,note:[1,2,5,6],now:[4,5,6],num_chunk:[1,6],number:[1,2,3,5,6,7],numpi:[1,2,4,6],nunmber:6,object:[1,2,3,5,6],object_prefix:5,observ:4,obtain:[2,5],ofblect:6,offer:5,ogr2ogr:2,ogr:[2,4,6],oherwis:2,old:[2,6],old_image_path:6,old_proj_wkt:2,older:6,oldest:6,olofsson:7,one:[1,2,3,4,6],onli:[1,2,4,5,6],oob_fail:2,open:[2,5,6],open_dataset_from_saf:6,oper:1,opposit:2,option:[1,4,5],orbit:[3,5,6],order:[1,3,6],org:[2,5,6],origin:[4,6],osr:4,other:[1,5,6],otherwis:[2,4,6],out:[4,5,6],out_datatyp:6,out_dir:6,out_directori:6,out_fil:6,out_filenam:[],out_fold:5,out_format:[],out_gt:2,out_imag:6,out_image_path:6,out_map:6,out_map_path:6,out_path:[1,2,5,6,7],out_raster_fil:6,out_raster_path:6,out_resolut:6,out_typ:1,outfmt:[1,6],outfn:[1,6],outlin:5,outofmemori:1,output:[1,2,3,4,5,6],output_imag:4,output_nodata_valu:[],over:[1,2,4],overlap:[2,6],overwrit:6,overwritten:5,own:[2,5],page:[],pair:[4,5,6],param:[1,2,5,6,7],paramet:[1,2,5,6,7],part:[3,5],part_fixed_value_sampl:7,pass:[3,4,5],passwd:5,password:5,path:[1,3,4,5,6,7],path_to_api:5,path_to_region:1,payment:5,pct:[],per:[5,7],perfectli:6,perform:[1,4,5],perimet:2,period:5,perman:6,permit:6,picalt:2,pickl:[1,4],pinned_sample_numb:7,pip:4,pixel:[1,2,4,6,7],pixel_bounds_from_polygon:2,pixel_to_point_coordin:2,pixelsize_i:[],pixelsize_x:[],pkl:[1,4],place:[1,6],planet:[3,5],planet_dir:5,planet_queri:5,planetlab:5,plugin:2,point:[2,7],point_to_pixel_coordin:2,poli:2,poly1:2,poly2:2,polygon:[1,2,4,5,6],popul:1,possibl:1,preced:3,precis:5,predict:1,predict_proba:1,preprocess:4,preprocess_landsat_imag:6,preprocess_sen2_imag:6,present:[1,2,3,4,5,6],presum:1,prevent:[2,3],previou:6,price:5,prior:1,prob:1,prob_imag:6,prob_out_dir:1,prob_out_path:1,probabilit:4,probabilti:1,probabl:[1,6],probablil:[],process:[1,2,4,5,6],produc:[1,4,7],produce_csv:7,produce_stratified_validation_point:7,product:[5,6],product_id:5,product_uuid:5,proejction:6,project:[0,1,2,3,4,6,7],project_arrai:0,project_dir:3,projection_wkt:7,prompt:[3,4],prop:7,provid:[2,4,5,6],psscene4band:5,put:[5,6],pwd:[],pyeo:[],pyeo_env:4,pyeo_test:4,python:[4,6],qgi:2,queri:4,queries_and_download:4,query_item:5,query_output:5,quick:5,quickwkt:2,r040:6,rais:5,ram:1,rang:4,raster1:2,raster2:2,raster:[1,2,5,6,7],raster_data_model:2,raster_manipul:4,raster_path:6,raster_reclass_binari:1,raster_sum:6,raster_to_arrai:6,rastesr:[],rcl_valu:1,read:[1,4,6],read_aoi:5,readabl:[4,5],readi:6,rearrang:2,recent:3,recent_first:3,reclassifi:1,recommend:4,rectangl:2,red:1,redownload:5,refer:[5,6],region:5,regist:5,rel:[3,6],relat:[3,4],relev:5,remov:[3,4,5],reorder:6,repeat:1,replac:6,repositori:5,repres:2,reproject:[2,6],reproject_directori:6,reproject_geotransform:2,reproject_imag:6,reproject_vector:2,reprojectimag:6,request:[5,7],requir:[4,5,6,7],resampl:6,resample_image_in_plac:6,reshap:1,reshape_ml_out_to_rast:1,reshape_prob_out_to_rast:1,reshape_raster_for_ml:1,resolut:[2,3,4,5,6],respect:1,rest:1,restructur:[],result:[1,5,6],retun:3,rminimum:7,ro4o:6,roll:5,root:3,rotat:2,round:2,routin:[0,6],row:1,rst_pth:6,run:[1,4,5,6],s2_object:5,s2a:6,s2b:6,safe:[3,4,6],safe_dir:[3,6],safe_file_path:6,safe_product_id:5,same:[1,2,3,4,6],sampl:[1,7],sample_count:1,sample_s:7,satellit:[4,5],save:[1,2,5,6,7],save_array_as_imag:6,save_point_list_to_shapefil:7,save_validation_maifest:7,scihub:5,scikit:[1,4],scl:6,score:1,scores_out:1,script:[3,4],search:5,search_dir:3,search_id:5,search_nam:5,search_request:5,second:6,section:[2,4,5],see:[1,2,4,5,6],seed:7,seem:5,sen2:3,sen2cor:[4,6],sen2cor_path:6,sens:6,sent2_queri:5,sent_2:[4,5],sentienl:5,sentinel:[3,4,5,6],sentinel_2:5,sentinelheub:5,sentinelhub:5,separ:[],seper:6,serialis:4,servic:5,session:5,set:[1,2,3,4,5,6,7],sever:6,shadow:6,shape:[1,7],shape_path:1,shape_projection_id:1,shapefil:[1,2,4,6,7],should:[1,4,6],shp:[1,4],shpefil:2,sig_csv_path:1,sig_datatyp:1,signatur:[1,4],simpl:[2,7],simple_s2_change_detect:[],sinergis:5,singl:[1,2,4,5,6],six:2,size:[6,7],skip:[1,6],skip_exist:1,skip_if_exist:6,small:[4,5,6,7],smaller:1,snip:2,some:[2,4],sort:[3,6],sort_by_timestamp:3,sourc:[3,4],spars:1,spatial:2,specif:1,specifi:[1,3,4,6,7],split:5,squar:6,srs_id:2,ssz:5,stack:[1,3,4,6],stack_and_trim_imag:6,stack_dir:6,stack_imag:6,stack_image_with_composit:6,stack_old_and_new_imag:6,stack_sentinel_2_band:6,stacked_dir:6,stage:5,standard:[5,7],start:[5,6],start_dat:5,state:[2,4],stdout:3,step:[4,6],still:5,stop:6,storag:5,store:[1,4],str:[5,6],strategi:7,stratifi:7,stratified_random_sampl:7,string:[2,3,5,6],structur:[3,4],subtract:[],suffix:[],suit:4,suitabl:1,supplementari:5,support:6,sysconf:1,system:4,t15pxt:6,t162211:6,t194348:6,tabl:5,take:[1,2,3,5,6,7],taken:6,tap:[],target_image_nam:3,target_standard_error:7,test:[2,3,4],text:[2,5],than:5,thei:[2,6],them:[1,2,3,6],themeselv:5,thhmmss:6,thi:[1,2,3,4,5,6,7],those:4,thread:5,threshold:[],tif:[1,3,4,6],tiff:[],tile:[3,6],time:[5,6],timestamp:[3,5,6],to_be_stack:[],todo:[],togeth:[],too:5,tool:5,top:[2,6],total:[1,6,7],total_class_s:7,total_sample_s:7,touch:[1,5],tpot:1,train:[1,4],training_data:1,training_image_file_path:1,training_shape_path:1,transfer:5,transform:2,translat:5,tri:5,trim:6,trim_imag:6,try_scihub_on_fail:5,tupl:2,two:[2,4,5,6],type:[1,2,5,6,7],ul_lr:[],uli:[],ulx:[],underscor:5,unexpect:[2,6],union:[2,6],uniqu:[3,5],unit:[2,6],unless:[2,4],unmask:6,unspecifi:6,untest:4,until:4,unzip:5,updat:[4,5,6],usag:4,use:[1,2,4,5,6,7],used:[1,2,7],useful_class_1:4,useful_class_2:4,user:[2,5,7],user_accuraci:7,usernam:5,uses:[1,4,6],using:[1,2,4,5,6],usual:2,usus:6,utc:[4,5],util:[],uuid:5,vairanc:7,valid:[1,3,7],validaion:4,valu:[1,2,3,4,6,7],variance_toler:7,vector:[2,4],veri:6,version:6,vrt:6,wach:6,wai:5,want:[1,5],warn:[3,6,7],web:5,well:2,whatev:[],when:[4,5,6],where:[1,6],whereev:4,whether:7,whole:2,width:[1,2,4,6],wiki:2,wikipedia:2,window:[4,5],wish:[2,5],within:[5,6],without:[1,6],wkbpolygon:2,wkt:[2,6],work:[2,3,4,5,6],would:4,wrap:[1,5],wrapper:2,write:[1,3,6],write_geometri:2,write_out:1,written:6,www:[2,5],x_max:2,x_min:2,x_pixel:2,x_re:6,y_max:2,y_min:2,y_pixel:2,y_re:6,yet:5,yml:4,you:[1,2,4,5,6],your:[2,4,5],your_pass:5,your_rast:4,your_shapefil:4,your_usernam:5,yyyi:5,yyyymmdd:[5,6],yyyymmddthhmmss:[4,5],zip:5},titles:["pyeo.array_utilities","pyeo.classification","pyeo.coordinate_manipulation","pyeo.filesystem_utilities","Welcome to Pyeo\u2019s documentation!","pyeo.queries_and_downloads","pyeo.raster_manipulation","pyeo.validation"],titleterms:{"function":5,AWS:[],Use:4,applic:4,arrai:[],array_util:0,assumpt:4,classif:1,coordinate_manipul:2,data:5,decis:4,design:4,document:4,download:5,file:5,filesystem_util:3,filter_by_class_map:4,image_comparison:4,indic:[],instal:4,introduct:4,mask:4,model:4,pyeo:[0,1,2,3,4,5,6,7],queri:5,queries_and_download:5,quick:4,raster:4,raster_manipul:6,refer:[],rolling_composite_s2_change_detect:4,safe:5,scihub:[],simple_s2_change_detect:4,sourc:5,start:4,structur:5,tabl:[],timestamp:4,util:[],validaion:7,welcom:4}})
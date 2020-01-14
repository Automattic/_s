<?php get_header(); ?>
<?php

$current_post_id = get_the_ID();
/* To Get Region Taxonomy data*/
$terms_regiom = get_terms([
    'taxonomy' => 'region_category',
    'hide_empty' => false]
); 

/* Function for get post by slug */
function get_post_by_slug($slug){
    $posts = get_posts(array(
            'name' => $slug,
            'posts_per_page' => 1,
            'post_type' => 'state',
            'post_status' => 'publish'
    ));
    
    if(! $posts ) {
        throw new Exception("NoSuchPostBySpecifiedID");
    }
	
    return $posts[0];
}

/* Custom post (State) Arguments */
$stateArgs = array(
				'post_type' => 'state',
				'posts_per_page' => -1,								
				'order' => 'ASC',				
			); 
$queryString = new WP_Query($stateArgs);
?>
<div class="location-map">
	<div class="container">
		<div class="location-search">
			<div class="col-md-8">
				<div class="col-sm-5">
					<h4>State Search:</h4>
					<form action="" method="POST" id="state_form" name="select_state_form">
						<select name="select_state" id="select_state_id">
							<option value="">Select State or Territory</option>
								<?php if ( $queryString->have_posts() ) {
									//echo $result;		
									
									while ( $queryString->have_posts() ) { 
										$queryString->the_post(); 
										$post_id = $post->ID;
										$post_link = get_the_permalink($post_id);			
										$post_title = get_the_title($post_id);
										$state_abbreviation = get_field('state_abbreviation',$post_id);
										if($current_post_id == $post_id){
											$selected = "selected";
										}else{
											$selected = "";
										}
									?>
										<option <?php echo $selected; ?>  value="<?php echo $post_link; ?>" id="<?php echo $post_id; ?>"> <?php echo $post_title; ?></option>		
									<?php }
									wp_reset_query();
								}
							?>
						</select>
						<!-- onclick="javascript:WebForm_DoPostBackWithOptions(new WebForm_PostBackOptions(&quot;ctl00$ContentPlaceHolder1$Button1&quot;, &quot;&quot;, false, &quot;&quot;, &quot;#results&quot;, false, false))" id="ContentPlaceHolder1_Button1"-->
						<input type="submit" name="ctl00$ContentPlaceHolder1$Button1" id="search_state" value="Submit"/>
					</form>
				</div>
				<div class="col-sm-5 pull-right">			
					<h4>Freeform Search:</h4>
					<form  action="" method="POST" name="search_key_word_form" id="search_key_word_form_id">					
						<input name="key_word" type="text" id="ContentPlaceHolder1_tbxKeywords" placeholder="Keywords" <?php if (!empty($_POST['key_word'])) { ?> value="<?php echo $_POST['key_word']; ?>" <?php }; ?>/>
						<select name="select_program" id="ContentPlaceHolder1_ddlProgram">
							<option <?php if ($_POST['select_program'] == 'CSBG and WAP') { ?> selected="true" <?php }; ?> value="CSBG and WAP" >CSBG and WAP</option>
							<option <?php if ($_POST['select_program'] == 'CSBG') { ?> selected="true" <?php }; ?>value="CSBG">CSBG</option>
							<option <?php if ($_POST['select_program'] == 'WAP') { ?> selected="true" <?php }; ?>value="WAP">WAP</option>	
						</select>
						<input type="submit" name="search_key_word" id="search_key_word_id" class="search_key_word" value="Submit"  />
					</form>
				</div>
				<div class="search-map">
					<map name="FPMap01">
						
						<?php $arr = get_post_by_slug('delaware'); ?>
						<area coords="510,132,515,131,515,131,509,154,505,146,504,131,509,132" href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="Delaware" />
						
						<?php $arr = get_post_by_slug('new-jersey'); ?>
						<area coords="512,113,515,112,518,109,518,116,516,130,504,129,506,120,504,122,511,112,514,112"
								href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="New Jersey" />
								
						<?php $arr = get_post_by_slug('rhode-island'); ?>
						<area coords="532,95,539,95,539,97,533,101" href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="Rhode Island" />
						
						<?php $arr = get_post_by_slug('massachusetts'); ?>
						<area coords="516,83,517,83,537,74,536,80,540,87,543,91,535,93,523,90,517,92" href="<?php echo get_permalink($arr->ID); ?>"	shape="polygon" alt="Massachusetts" />
						
						<?php $arr = get_post_by_slug('connecticut'); ?>				
						<area coords="518,94,524,92,530,92,531,102,518,107"	href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="Connecticut" />
						
						<?php $arr = get_post_by_slug('michigan'); ?>
						<area coords="399,119,415,116,427,116,432,103,435,92,431,80,422,86,427,70,424,60,411,55,405,67,400,75,399,86,399,99,401,109"
								href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="Michigan" />
								
						<?php $arr = get_post_by_slug('pennsylvania'); ?>
						<area coords="469,101,475,99,488,96,498,93,506,96,516,98,515,100,513,105,509,111,508,114,505,118,494,122,470,126,456,123,454,113,452,111,452,107,456,105,463,103" href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="Pennsylvania" />
						
						<?php $arr = get_post_by_slug('new-york'); ?>
						<area coords="490,69,487,69,484,82,467,84,453,104,499,91,508,96,516,97,514,80,510,62,505,60,496,62"
								href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="New York" />
						
						<?php $arr = get_post_by_slug('new-hampshire'); ?>
						<area coords="527,45,523,48,522,79,536,73" href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="New Hampshire" />
										
						<?php $arr = get_post_by_slug('vermont'); ?>
						<area coords="510,57,523,51,521,82,516,84" href="<?php echo get_permalink($arr->ID); ?>"shape="polygon" alt="Vermont" />
						
						
						<?php $arr = get_post_by_slug('maine'); ?>
						<area coords="534,61,528,46,527,42,530,39,532,31,532,28,533,24,534,17,535,10,542,13,549,7,552,17,553,20,558,28,561,36,557,41,549,47,548,53,543,57,536,71" href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="Maine" />
						
						<?php $arr = get_post_by_slug('louisiana'); ?>
						<area coords="329,234,329,247,333,257,333,284,345,282,361,287,382,286,378,272,386,270,375,261,357,263,361,234"
								href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="Louisiana" />
								
						<?php $arr = get_post_by_slug('missouri'); ?>		
						<area coords="372,185,371,187,356,189,324,187,323,176,324,167,323,159,323,150,319,141,313,135,312,129,325,127,346,127,350,140,355,149,360,155,362,160,367,171,373,174,373,180"
								 href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="Missouri" />
								 
						<?php $arr = get_post_by_slug('west-virginia'); ?>		 
						<area shape="poly" coords="456,126,453,130,452,134,449,138,445,145,443,150,441,158,444,166,448,170,458,170,470,164,472,154,472,145,474,140,481,135,487,135,478,130,469,138,466,131" href="<?php echo get_permalink($arr->ID); ?>" alt="West Virginia" />
						
						<?php $arr = get_post_by_slug('virginia'); ?>
						<area coords="430,180,443,171,455,170,462,170,473,163,475,143,480,142,484,136,489,138,495,144,501,152,508,153,514,163,514,168,487,174,456,181" href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="Virginia" />
						
						<?php $arr = get_post_by_slug('massachusetts'); ?>
						<area coords="549,72,621,81" href="<?php echo get_permalink($arr->ID); ?>" shape="rect" alt="Massachusetts">
						
						<?php $arr = get_post_by_slug('rhode-island'); ?>
						<area coords="549,85,619,95" href="<?php echo get_permalink($arr->ID); ?>" shape="rect" alt="Rhode Island">
						
						<?php $arr = get_post_by_slug('new-hampshire'); ?>
						<area coords="550,59,622,68" href="<?php echo get_permalink($arr->ID); ?>" shape="rect" alt="New Hampshire">
						
						<?php $arr = get_post_by_slug('georgia'); ?>
						<area coords="416,208,440,202,460,221,467,230,475,241,472,250,444,254,437,253,435,251,431,246" href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="Georgia">
						
						<?php $arr = get_post_by_slug('south-carolina'); ?>
						<area coords="444,206,442,195,467,193,478,195,500,207,475,238,463,223" href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="South Carolina">
						
						<?php $arr = get_post_by_slug('vermont'); ?>
						<area coords="481,38,522,47" href="<?php echo get_permalink($arr->ID); ?>" shape="rect" alt="Vermont">
						
						<?php $arr = get_post_by_slug('delaware'); ?>
						<area coords="524,128,582,138" href="<?php echo get_permalink($arr->ID); ?>" shape="rect" alt="Delaware">
						
						<?php $arr = get_post_by_slug('north-carolina'); ?>
						<area coords="519,169,469,176,464,180,444,193,452,193,469,192,483,193,488,197,497,205,505,202,513,192,525,177"
								href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="North Carolina">
						
						<?php $arr = get_post_by_slug('connecticut'); ?>				
						<area coords="545,99,599,108" href="<?php echo get_permalink($arr->ID); ?>" shape="rect" alt="Connecticut">
						
						<?php $arr = get_post_by_slug('maryland'); ?>
						<area coords="524,141,574,153" href="<?php echo get_permalink($arr->ID); ?>" shape="rect" alt="Maryland">
						
						<?php $arr = get_post_by_slug('alabama'); ?>
						<area coords="393,209,396,251,401,252,405,252,412,252,433,251,416,209" href="<?php echo get_permalink($arr->ID); ?>"
								shape="polygon" alt="Alabama">
								
						<?php $arr = get_post_by_slug('new-jersey'); ?>		
						<area coords="524,112,591,121" href="<?php echo get_permalink($arr->ID); ?>" shape="rect" alt="New Jersey">
						
						<?php $arr = get_post_by_slug('mississippi'); ?>
						<area coords="370,208,363,231,360,260,375,258,386,269,397,268,392,209" href="<?php echo get_permalink($arr->ID); ?>"
								shape="polygon" alt="Mississippi">
								
						<?php $arr = get_post_by_slug('utah'); ?>		
						<area coords="168,126,189,129,183,181,132,167,142,99,169,104" href="<?php echo get_permalink($arr->ID); ?>"
								shape="polygon" alt="Utah">
						
						<?php $arr = get_post_by_slug('arizona'); ?>		
						<area coords="129,168,177,179,165,249,147,247,109,225,115,208,118,199,121,187,127,189" href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="Arizona">
								
						<?php $arr = get_post_by_slug('nevada'); ?>		
						<area coords="86,87,139,99,130,163,125,185,118,188,74,119" href="<?php echo get_permalink($arr->ID); ?>"
								shape="polygon" alt="Nevada">
								
						<?php $arr = get_post_by_slug('california'); ?>				
						<area coords="48,78,42,101,56,170,87,208,107,223,119,194,72,118,83,88" href="<?php echo get_permalink($arr->ID); ?>"
								shape="polygon" alt="California">
						
						<?php $arr = get_post_by_slug('washington'); ?>				
						<area shape="polygon" coords="91,1,62,7,66,32,78,42,124,51,135,11" href="<?php echo get_permalink($arr->ID); ?>" alt="Washington">
						
						<?php $arr = get_post_by_slug('oregon'); ?>
						<area shape="polygon" coords="67,33,49,77,114,92,123,53,77,44" href="<?php echo get_permalink($arr->ID); ?>" alt="Oregon">
						
						<?php $arr = get_post_by_slug('idaho'); ?>
						<area coords="139,22,140,28,145,41,148,52,150,61,159,78,171,78,170,103,114,92,125,54,133,21"
								href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="Idaho">
								
						<?php $arr = get_post_by_slug('new-mexico'); ?>		
						<area coords="232,246,237,189,178,183,170,243,180,242,186,244" href="<?php echo get_permalink($arr->ID); ?>"
								shape="polygon" alt="New Mexico">
								
						<?php $arr = get_post_by_slug('montana'); ?>			
						<area coords="146,12,135,14,144,30,147,41,146,49,159,76,169,78,172,67,233,73,236,23"
								href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="Montana">
						
						<?php $arr = get_post_by_slug('wyoming'); ?>			
						<area coords="225,74,234,77,234,84,234,97,233,107,233,135,207,131,190,128,176,125,169,124,173,80,174,68,179,69,205,72"
								href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="Wyoming">
						
						<?php $arr = get_post_by_slug('north-dakota'); ?>	
						<area coords="238,24,255,24,277,26,298,27,297,38,296,44,295,54,294,64,268,65,253,64,236,63,238,35"
								href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="North Dakota">
						
						<?php $arr = get_post_by_slug('south-dakota'); ?>
						<area coords="235,63,256,66,279,66,288,65,292,65,301,69,301,75,301,89,303,97,305,108,294,103,281,102,269,103,255,102,233,99,234,77,235,67" href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="South Dakota">
						
						<?php $arr = get_post_by_slug('texas'); ?>
						<area coords="239,196,267,198,273,216,278,222,284,226,298,229,301,231,306,233,313,231,319,231,326,236,327,246,331,258,331,270,335,279,326,283,321,288,322,288,318,290,313,292,309,296,300,299,295,306,289,321,289,324,283,318,277,314,270,303,268,296,260,286,251,281,238,284,233,288,229,291,226,286,224,279,215,271,208,263,199,254,174,251,172,246,235,250"
								href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="Texas">
								
						<?php $arr = get_post_by_slug('minnesota'); ?>		
						<area coords="294,61,300,26,308,27,318,24,322,30,332,33,337,33,346,35,347,40,336,53,341,47,336,60,335,63,334,70,336,73,344,78,354,92,305,95,303,70"	href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="Minnesota">
						
						<?php $arr = get_post_by_slug('oklahoma'); ?>
						<area coords="238,186,312,186,326,187,327,207,327,230,315,228,304,229,294,225,280,222,272,212,269,202,268,197,238,195"
								href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="Oklahoma">
								
						<?php $arr = get_post_by_slug('arkansas'); ?>		
						<area coords="329,188,360,189,367,190,376,190,371,202,364,217,360,232,330,230,330,217,329,213,328,195"
								href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="Arkansas">
								
						<?php $arr = get_post_by_slug('kansas'); ?>		
						<area coords="265,145,299,145,308,145,318,145,321,151,327,185,275,186,253,185,253,144"
								href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="Kansas">
								
						<?php $arr = get_post_by_slug('nebraska'); ?>		
						<area coords="235,101,253,103,274,104,291,104,302,110,306,117,308,128,311,133,319,144,254,143,254,137,234,136"
								href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="Nebraska">
								
						<?php $arr = get_post_by_slug('iowa'); ?>			
						<area coords="303,97,349,95,354,98,358,104,359,110,358,115,354,114,353,120,352,127,342,126,308,128,309,122,304,113,304,104"
								href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="Iowa">
								
						<?php $arr = get_post_by_slug('illinois'); ?>		
						<area coords="359,102,380,100,385,108,385,113,386,121,387,129,390,135,389,138,386,151,380,170,372,173,365,164,363,155,358,149,352,142,347,129,353,127,355,114,357,112"
								href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="Illinois">
								
						<?php $arr = get_post_by_slug('tennessee'); ?>			
						<area coords="365,207,376,189,403,183,429,179,454,182,442,193,443,194,439,198,441,200,437,201,423,204,406,207,390,207,385,208"
								href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="Tennessee">
								
						<?php $arr = get_post_by_slug('kentucky'); ?>		
						<area coords="375,189,375,176,379,172,387,169,395,167,406,161,412,155,416,154,424,156,434,159,441,161,444,169,437,176,407,181"
								href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="Kentucky">
								
						<?php $arr = get_post_by_slug('indiana'); ?>			
						<area coords="388,125,396,120,410,118,411,128,417,148,406,161,385,171,383,164,386,154,388,147,388,131"
								href="<?php echo get_permalink($arr->ID); ?>" shape="polygon" alt="Indiana">
								
						<?php $arr = get_post_by_slug('ohio'); ?>		
						<area coords="410,117,420,116,429,116,435,116,442,113,450,107,452,114,451,127,448,135,442,147,438,158,427,157,419,154,412,133"
								href="<?php echo get_permalink($arr->ID);?>" shape="polygon" alt="Ohio">
								
						<?php $arr = get_post_by_slug('wisconsin'); ?>
						<area coords="349,39,360,38,349,55,367,50,378,51,406,51,384,69,380,74,383,72,384,83,383,89,385,102,363,103,354,95,349,85,341,77,333,69,337,59" href="<?php echo get_permalink($arr->ID);?>" shape="polygon" alt="Wisconsin">
						
						<?php $arr = get_post_by_slug('puerto-rico'); ?>
						<area coords="418,356,472,414" href="<?php echo get_permalink($arr->ID);?>" shape="rect" alt="Puerto Rico" />
						
						<?php $arr = get_post_by_slug('northern-mariana-islands'); ?>
						<area coords="364,356,416,424" href="<?php echo get_permalink($arr->ID);?>" shape="rect" alt="Northern Mariana Islands" />
						
						<?php $arr = get_post_by_slug('guam'); ?>
						<area coords="259,356,307,417" href="<?php echo get_permalink($arr->ID);?>" shape="rect" alt="Guam" />
						
						<?php $arr = get_post_by_slug('virgin-islands'); ?>
						<area coords="473,356,520,412" href="<?php echo get_permalink($arr->ID);?>" shape="rect" alt="Virgin Islands" />
						
						<?php $arr = get_post_by_slug('florida'); ?>
						<area shape="poly" coords="398,255,404,255,413,255,425,255,429,258,439,255,453,255,459,258,460,253,464,252,472,270,476,279,478,289,484,299,489,305,490,313,490,325,489,328,481,329,473,324,469,315,466,309,462,310,461,302,460,296,456,297,456,285,454,279,449,276,444,269,437,267,432,269,426,274,422,269,415,265,410,265,403,266,399,260,399,260" href="<?php echo get_permalink($arr->ID);?>" alt="Florida" />
						
						<?php $arr = get_post_by_slug('american-samoa'); ?>
						<area coords="308,356,363,425" href="<?php echo get_permalink($arr->ID);?>" shape="rect" alt="American Samoa" />
						
						<?php $arr = get_post_by_slug('alaska'); ?>
						<area coords="38,334,199,452" href="<?php echo get_permalink($arr->ID);?>" shape="rect" alt="Alaska" />
						
						<?php $arr = get_post_by_slug('hawaii'); ?>
						<area coords="203,356,258,415" href="<?php echo get_permalink($arr->ID);?>" shape="rect" alt="Hawaii" />
						
						<?php $arr = get_post_by_slug('colorado'); ?>
						<area shape="poly" coords="190,132,197,132,207,134,219,135,233,137,244,139,253,139,253,145,253,160,253,169,253,186,237,186,184,182" href="<?php echo get_permalink($arr->ID);?>" alt="Colorado" />
						
						<?php $arr = get_post_by_slug('district-of-columbia'); ?>
						<area shape="rect" coords="524,156,610,168" href="<?php echo get_permalink($arr->ID);?>" alt="District of Columbia" />
						<area shape="poly" coords="487,128,487,127" href="#" />
						
						<?php $arr = get_post_by_slug('maryland'); ?>
					  <area shape="poly" coords="460,125,474,127,491,124,503,121,503,128,503,135,504,144,507,151,502,151,497,142,488,136,482,130,470,133" href="<?php echo get_permalink($arr->ID);?>" alt="Maryland" />
					</map>
					<img src="<?php echo get_template_directory_uri(); ?>/images/newMap3.png" alt="United States map of states" width="613" height="473" usemap="#FPMap01" style="width: 625; height: 567" border="0" polygon="(0,74) (36,84) (32,116) (68,172) (61,199) (42,198) (4,157) ?dstate=CA')" rectangle="(416,132) (463,138) ?dstate=MD#results')">
				</div>
			</div>	
			<div class="col-md-4">
				<div class="region-listing">
					<!-- Region Listing -->
					<?php if(!empty($terms_regiom)) { ?>		
					<?php foreach($terms_regiom as $region ) { ?>
					<?php $term_name = $region->name; ?>
					<?php $term_ID = $region->term_id; ?>
					<?php $term_taxonmy = $region->taxonomy; ?>	
					<?php $term_taxonmy_color = get_field('region_color',$term_taxonmy.'_'.$term_ID);?>
					<div class="region-list" value="<?php echo $term_ID; ?>" name="<?php echo $term_name; ?>"  data-attribute="<?php echo $term_taxonmy; ?>">
						<div class="region-title"><span class="blank-block" style="background: <?php echo $term_taxonmy_color; ?>"></span><?php echo $term_name; ?></div>
						<div class="region-links">
							<?php  $stateArguments = array(
							'orderby' => 'title',
							'order'=> 'ASC',
							'post_type' => 'state',
							'posts_per_page' => -1,
							'tax_query' => array(
							array(
							  'taxonomy' => 'region_category',
							  'field' => $term_ID,
							  'terms' => $term_ID, // Where term_id of Term 1 is "1".
							  'include_children' => false
							)));

							$stateQueryString = new WP_Query($stateArguments);		
							if ( $stateQueryString->have_posts() ) {									
								while ( $stateQueryString->have_posts() ) { 
									$stateQueryString->the_post(); 					
									$post_id = $post->ID;					
									$post_link = get_the_permalink($post_id);			
									$post_title = get_the_title($post_id);
									$state_abbreviation = get_field('state_abbreviation',$post_id);
									?>
									<?php if($stateQueryString->current_post + 1 == ($stateQueryString->post_count - 1)) { ?>
									<a href="<?php echo $post_link; ?>"><?php echo $post_title; ?></a>
									<?php echo "&nbsp; and &nbsp;"; ?>
									<?php } else if(!(($stateQueryString->current_post +1) == ($stateQueryString->post_count))) { ?>
									<a href="<?php echo $post_link; ?>"><?php echo $post_title; ?></a><b>,</b>						
									<?php } else { ?>
									<a href="<?php echo $post_link; ?>"><?php echo $post_title; ?></a>
									<?php } ?>
								<?php }
								wp_reset_query();
							}
							?>
						</div>		
					</div>
					<?php } ?>		
					<?php } ?>
				</div>	
			</div>
		</div>
	</div>
</div>	
	
<div class="region-list-result">	
	<div class="container" id="state_results">
	<?php 
	/* Serch By keyword */

	if(isset($_POST['search_key_word'])){	
		echo '<div id="results">';	
			$searchKeyword = $_POST['key_word'];
			$selectedProgram = $_POST['select_program'];	
			
			
			if(!empty($searchKeyword)){
			$query_param_search = "csp.name like '%$searchKeyword%' OR cc.organization_name like '%$searchKeyword%' OR cvcf.hhs_5  like '%$searchKeyword%' OR cc.display_name  like '%$searchKeyword%' OR ca.street_address like '%$searchKeyword%' OR ca.city like '%$searchKeyword%' OR cc.job_title like '%$searchKeyword%'"; 
			 
			
			
			$result_key_word = result_query($query_param_search);
			$response_from = "search_key_word_id_form";
			
			
			foreach($result_key_word as $response){
			
				$program = $response->Program;
				if(strpos($program, 'WAP') !== false && $selectedProgram == 'WAP'){
					$key_wap_array[] = $response;			
				} else if(strpos($program, 'CSBG') !== false && $selectedProgram == 'CSBG'){
					$key_csbg_array[] = $response;
				} else if($selectedProgram == 'CSBG and WAP'){
					if (strpos($program, 'WAP') !== false && strpos($program, 'CSBG') !== false) {
						$key_wap_array[] = $response;
						$key_csbg_array[] = $response;
					} else if(strpos($program, 'WAP') !== false){
						$key_wap_array[] = $response;	
					}else if(strpos($program, 'CSBG') !== false){
						$key_csbg_array[] = $response;
					}
				}
			}	
				echo '<div class="search-keyword" id="'.$response_from.'">';
				get_html($key_csbg_array,$key_wap_array);
				echo '</div>';
			}
		echo '</div>';
	} else { 
	echo '<div id="results">';
				
			$state_abbreviation = get_field('state_abbreviation',$post->ID); 	
			
			if(!empty($state_abbreviation)) {
			
			$query_param = "csp.abbreviation = '$state_abbreviation'"; 
			$result = result_query($query_param);
		
			foreach($result as $data){
			
				$program = $data->Program;
				//if($program == 'WAP'){
				if (strpos($program, 'WAP') !== false && strpos($program, 'CSBG') !== false) {
					$wap_array[] = $data;
					$csbg_array[] = $data;
				} else if (strpos($program, 'WAP') !== false) {
					$wap_array[] = $data;			
				} else if(strpos($program, 'CSBG') !== false){
					$csbg_array[] = $data;
				}
			}
				if($current_post_id == $post->ID){
				echo '<div class="default-listing row">';
				get_html($csbg_array,$wap_array);
				echo '</div>';
				}
			} 
	echo '</div>';
	}
	?>

	<?php function get_html($csbg,$wap) { 
	
	if(!empty($csbg)){
			echo '<div class="col-sm-6" ><h4 class="link-title">NASCSP CSBG State Members</h4>';
			foreach($csbg as $data){
				$name = $data->Name;
				$email = $data->Email;
				$program = $data->Program;
				$organization = $data->Organization;
				$nasccap = $data->nasccap;
				$position = $data->Position;
				$region = $data->Region;
				$phone = $data->Phone;
				$Website = $data->Website;
				$street_address =$data->street_address;
				$supplemental_address_1 =$data->supplemental_address_1;
				$supplemental_address_2 =$data->supplemental_address_2;
				$street_number =$data->street_number;
				$city =$data->city;
				$state =$data->state;
				$postal_code =$data->postal_code;
				$postal_code_suffix =$data->postal_code_suffix;
				$address = '';
				
				echo '<div class="region-result">'; ?>
					<?php if(!empty( $name )) { ?>
					 <div class="link-name"><b>Name:</b> <a href="mailto:<?php echo $email; ?>"><?php echo $name; ?></a> </div>
					<?php }?>
					 <?php if(!empty( $organization )) { ?>
					 <div class="link-organization"><b>Organization:</b> 
					 <?php if(!empty($Website)) { ?>
						<a href="<?php echo $Website; ?>" ><?php echo $organization; ?></a>
					 <?php } else { ?>
						<?php echo $organization; ?>
					 <?php } ?>
					 </div>
					 <?php }	?>
					  <?php if(!empty( $position )) { ?>
					<?php echo $position; ?>
					 <?php }	?>
					 <?php 
						if( isset($street_address) ) {
							$address .= $street_address;
						}		//street_address if end
						if( isset($supplemental_address_1) ){
							$address .= '</br>'.$supplemental_address_1;
						}	// supplemental_address_1 if end

						if( isset($supplemental_address_2) ){
							$address .= $supplemental_address_2;
						} 
						if( isset($street_number) ){
							$address .= $street_number;
						}		// street_number if end
						if( isset($city) ){
							$address .='<br>'.$city;
						}
						if( isset($state) ){
							$address .=', '.$state;
						}
						if( isset($postal_code) ){
							$address .= ' '.$postal_code;
						}
						if( isset($postal_code_suffix) ){
							$address .= '-'.$postal_code_suffix;
						}
						?>
					 <?php if(!empty($address)) { ?>
					 <div class="link-address"><b>Address:</b> <?php echo $address; ?></div>					
					 <?php }	?>
					 <?php if(!empty( $phone )) { ?>
					 <div class="link-phone"><b>Phone:</b> <?php echo $phone; ?></div>
					 <?php } ?>
					<?php /*if(!empty( $nasccap )) { ?>
					 <div class="link-region "><b>NASCSP:</b> <?php echo $nasccap; ?></div>
					 <?php }*/ ?>
					
					 <?php /* if(!empty( $region )) { ?>
					 <div class="link-region "><b>HHS Region:</b> <?php echo $region; ?></div>
					 <?php }*/ ?>
				<?php echo '</div>';
				
			}
		echo '</div>';
		} else {
		echo '<div class="col-sm-6"><h4 class="link-title">NASCSP CSBG State Members</h4>';
		echo 'No record found.';
		echo '</div>';
		}
		
		if(!empty($wap)){
			echo '<div class="col-sm-6"><h4 class="link-title">NASCSP WAP State Members</h4>';
			foreach($wap as $data){
				$name = $data->Name;
				$email = $data->Email;
				$program = $data->Program;
				$organization = $data->Organization;
				$region = $data->Region;
				$phone = $data->Phone;
				$Website = $data->Website;
				$nasccap = $data->nasccap;
				$position = $data->Position;
				$street_address =$data->street_address;
				$supplemental_address_1 =$data->supplemental_address_1;
				$supplemental_address_2 =$data->supplemental_address_2;
				$street_number =$data->street_number;
				$city =$data->city;
				$state =$data->state;
				$postal_code =$data->postal_code;
				$postal_code_suffix =$data->postal_code_suffix;
				$address = '';
				
				echo '<div class="region-result">'; ?>
					<?php if(!empty( $name )) { ?>
					 <div class="link-name"><b>Name:</b> <a href="mailto:<?php echo $email; ?>"><?php echo $name; ?></a> </div>
					<?php }?>
					 <?php if(!empty( $organization )) { ?>
					 <div class="link-organization"><b>Organization:</b> 
					 <?php if(!empty($Website)) { ?>
						<a href="<?php echo $Website; ?>" ><?php echo $organization; ?></a>
					 <?php } else { ?>
						<?php echo $organization; ?>
					 <?php } ?>					 
					 </div>
					 <?php }	?>
					  <?php if(!empty( $position )) { ?>
					<?php echo $position; ?>
					 <?php }	?>
					 <?php 
						if( isset($street_address) ) {
							$address .= $street_address;
						}		//street_address if end
						if( isset($supplemental_address_1) ){
							$address .= '</br>'.$supplemental_address_1;
						}	// supplemental_address_1 if end

						if( isset($supplemental_address_2) ){
							$address .= $supplemental_address_2;
						} 
						if( isset($street_number) ){
							$address .= $street_number;
						}		// street_number if end
						if( isset($city) ){
							$address .='<br>'.$city;
						}
						if( isset($state) ){
							$address .=', '.$state;
						}
						if( isset($postal_code) ){
							$address .= ' '.$postal_code;
						}
						if( isset($postal_code_suffix) ){
							$address .= '-'.$postal_code_suffix;
						}
						?>
					 <?php if(!empty($address)) { ?>
					 <div class="link-address"><b>Address:</b> <?php echo $address; ?></div>					
					 <?php }	?>
					 <?php if(!empty( $phone )) { ?>
					 <div class="link-phone"><b>Phone:</b> <?php echo $phone; ?></div>
					 <?php } ?>
					 <?php /*if(!empty( $nasccap )) { ?>
					 <div class="link-region "><b>NASCSP  :</b> <?php echo $nasccap; ?></div>
					 <?php }*/	?>
					 <?php /* if(!empty( $region )) { ?>
					 <div class="link-region "><b>HHS Region  :</b> <?php echo $region; ?></div>
					 <?php }*/ ?>
				<?php echo '</div>';
				
			}
		echo '</div>';
			
		} else {
		echo '<div class="col-sm-6"><h4 class="link-title">NASCSP WAP State Members</h4>';
		echo 'No records found.';
		echo '</div>';
		}
	 } 
	 ?>
	 </div>
</div>
<script type="text/javascript" src="<?=site_url(); ?>/wp-content/themes/nascsp/js/imageMapResizer.min.js"></script>
<script>
jQuery(document).ready(function () {
 jQuery('html, body').animate({
        scrollTop: jQuery('#state_results').offset().top},100);

 jQuery('map').imageMapResize();
});
</script>
<?php get_footer();

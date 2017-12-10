<?php
/**
* The template for displaying the Donate page
*
* @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
*
* @package _s
*/

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<div id="donation-banner">
				<div class="center-in-banner">
					<div class="present-icon"></div>
					<h1 class="white">Make a Donation</h1>
				</div>
			</div>

			<?php
			while ( have_posts() ) : the_post();
			?>
			<div class="aligncenter page-width">
				<h1>YOUR GIFT MATTERS!</h1>
				<h2>Consider giving a monetary gift that will help transform the life of a child in need.</h2>
				<script formId="e13eb1c600e03fb27974" src="https://checkout.paymentspring.com/js/paymentspring.js"></script>
			</div>

			<div class="light-blue-background">
				<div class="content-width">

				<h1 class="aligncenter">Other donation options</h1>

				<ul class="fp-grid no-bullet">
					<li class=" aligncenter">
  					<h2 class="aligncenter">Match your Gift</h2>
            <p class="aligncenter">
							<strong>MANY COMPANIES OFFER MATCHING GIFTS.</strong> So, as an employee when you make a donation you can submit a form and your company may match it. If you need help filling out your form, we will be glad to help you. Contact <a href="mailto:info@lifeties.org">info@lifeties.org</a> for any questions. Keep in mind that companies have different policies for Matching Gifts requests, some accept them until the end of the calendar year and others have shorter deadlines, so check with your company for specific details.</p>
  				</li>
					<li class="aligncenter">
  					<h2 class="aligncenter">Tribute Gifts</h2>
            <p class="aligncenter">You can give a gift to someone and also help LifeTies. Just call or email our office, and we will send a beautiful card to the recipient of your choice saying how you gave a gift to LifeTies in their name. Any amount can be given. This is a great idea for friends and family in your life that you know appreciate the work of LifeTies, or perhaps for someone that you think would be interested in learning more.</p>
  				</li>
					<li class="aligncenter">
  					<h2 class="aligncenter">Share Stocks</h2>
            <p class="aligncenter">If you would like to contribute shares of stocks, please call our office at 609.771.1600 or send us an email <a href="mailto:info@lifeties.org">info@lifeties.org</a>, and we will provide you with the information to easily make a transfer.</p>
  				</li>
  				<li class="aligncenter">
  					<h2 class="aligncenter">You Shop, Amazon Gives</h2>
            <p class="aligncenter">Amazon will donate 0.5% of the price of your eligible AmazonSmile purchases to LifetTies whenever you shop on AmazonSmile.</p>
						<div class="grid-wrapper">
							<div class="left-section center-in-banner">
								<div class="amazon-smile-logo"></div>
							</div>

							<div class="right-section">
								<a href="https://smile.amazon.com/ch/22-2417627" class="btn">Start Shopping</a>
							</div>
						</div>
  				</li>
					<li>
						<h2 class="aligncenter">In-Kind Donations and Services</h2>
						<p class="aligncenter">Please feel free to contact <a href="mailto:info@lifeties.org">info@lifeties.org</a> for more information on how you can help with supplies and other needs. Below we have provided a list of some common ongoing needs.</p>
						<ul class="listing-marg-btm">
							<li class="check-blue">
								<h4>Printing Services for holiday appeal and newsletter</h4>
							</li>

							<li class="check-blue">
								<h4>Up to Date College SAT and ACT Prep Books</h4>
							</li>

							<li class="check-blue">
								<h4>College Books describing Colleges such as Fiske Guide to Colleges</h4>
							</li>

							<li class="check-blue">
								<h4>Personal Care Items for our Youth in Supportive Housing Units</h4>
							</li>

							<li class="check-blue">
								<h4>Bed-in-a Bag</h4>
							</li>

							<li class="check-blue">
								<h4>New Towels and Washcloths</h4>
							</li>

							<li class="check-blue">
								<h4>Utensils</h4>
							</li>

							<li class="check-blue">
								<h4>Holiday Gifts</h4>
							</li>

							<li class="check-blue">
								<h4>Gift Cards for our Youth</h4>
							</li>

							<li class="check-blue">
								<h4>Window treatments for Group Homes and Apartments</h4>
							</li>

							<li class="check-blue">
								<h4>Lamps</h4>
							</li>

							<li class="check-blue">
								<h4>Lap Desks</h4>
							</li>

							<li class="check-blue">
								<h4>Stove for Rainbow House</h4>
							</li>

							<li class="check-blue">
								<h4>Dishes</h4>
							</li>
						</ul>
					</li>
	  		</ul>
			</div>
		</div>
		<?php endwhile; // End of the loop.?>

		<!-- Sponsors -->
		<section class="sponsor-carousel">
			<h2 class="aligncenter">A big thanks to our supporters!</h2>
		  <div>
		  <?php echo do_shortcode('[logoshowcase dots="false"]'); ?>
		  </div>
		</section>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php

get_footer();

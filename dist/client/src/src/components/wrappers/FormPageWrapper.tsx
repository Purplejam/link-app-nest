import styled from 'styled-components'

export const FormPage = styled.div`
	height: calc(100vh - 4rem);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #FAFAFA;

	.sub-header {
		margin-bottom: 1.5rem;
		text-align: center;
	}

	h2.main-header {
	display: inline-block;
	&:after {
		opacity: .6;
		margin-top: .5rem;
		margin-left: auto;
		margin-right: auto;
		content: '';
		display: block;
		width: 4rem;
		height: 3px;
		background-color: #EF4F4F;
	}
}

	.loginForm {
		&.stay-touch-box {
			padding: 3rem 1.4rem 2rem 1.4rem;
		}
		width: 35%;
		border: 2px solid #f1f3f4;
		box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
		border-radius: .4rem;
		padding: 3.6rem 1.4rem;
		background-color: #fff;
		text-align: center;
		position: relative;
		.MuiTextField-root {
			margin-bottom: 1rem;
		}
		label {
			font-size: 1rem;
			margin-bottom: 8px;
		}
		&.verify-page {
			height: 200px;
			width: 60%;
			background-color: #FAFAFA;
			box-shadow: none;
			border: none;
		}
	}
	.alert-message {
		font-size: 1rem;
		a {
			text-decoration: underline;
			color: #4855ab;
			font-weight: 600;
		}
	}

	.spam-alert {
		text-align: left;
		opacity: .7;
		font-size: .9rem;
		margin-left: .5rem;
	}

	.form-description {
		&.forgot {
			text-align: left;
			margin-top: -.5rem;
			font-size: .8rem;
			a {
				display: inline-block;
			}
		}
		font-size: 1rem;
		a {
			text-decoration: underline;
			color: #4855ab;
			font-weight: 400;
			transition: all .2s ease;
			&:hover {
				opacity: .8;
			}
			&.register-link {
				font-weight: 700;
				opacity: 1;
			}
		}
	}


	.alert-message {
		position: absolute;
		top 1.5rem;
		left: 0;
		right: 0;
		margin: 0 auto;
	}

	input {
		font-family: 'Montserrat', sans-serif;
		&::placeholder {
			color: #e9e9e9;
			font-size: 2rem;
		}
	}

	.simple-button {
		border-radius: 2px;
		margin-top: 1rem;
		margin-bottom: 2.4rem;
		padding: .6rem 2rem;
		width: 100%;
		&.demo-button {
				margin-bottom: 0;
		}
		&.stay-in-button {
			margin-top: 0;
		}
	}




	@media (max-width: 900px) {
		.loginForm {
			width: 50%;
		}
	}

	@media (max-width: 768px) {
		.loginForm {
			width: 70%;
		}

		.form-description {
			font-size: .8rem;
		}
	}

	@media (max-width: 450px) {
		.loginForm {
			width: 90%;
		}	

		.form-description {
			font-size: .7rem;
		}	
	}
`

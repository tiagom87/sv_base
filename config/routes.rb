SvBase::Application.routes.draw do
  root 'pages#home'
  get 'second', to: 'pages#second'
  get 'template', to: 'pages#template'
end

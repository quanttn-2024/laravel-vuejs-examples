<?php

namespace App\Services;

use Exception;
use App\Repositories\User\UserRepositoryInterface;

/**
 * Class UserService
 *
 * @package App\Services
 */
class UserService
{
    /**
     * @var UserRepositoryInterface
     */
    private $userRepository;

    /**
    * UserService constructor
    *
    * @param UserRepositoryInterface $userRepository
    */
    public function __construct(
        UserRepositoryInterface $userRepository
    ) {
        $this->userRepository = $userRepository;
    }

    /**
     * Get list user
     *
     * @return mixed
     */
    public function getList()
    {
        $users = $this->userRepository->getAll();

        return $users;
    }

    /**
     * Create a user
     *
     * @param array $input
     *
     * @return bool|\Illuminate\Database\Eloquent\Model
     */
    public function createUser($input)
    {
        try {
            $user = $this->userRepository->create($input);
            return $user;
        } catch (Exception $ex) {
            report($ex);

            return false;
        }
    }

    /**
     * Show user detail
     *
     * @param  $id;
     *
     * @return Array
     */
    public function showUser($id)
    {
        $user = $this->userRepository->findById($id);

        return [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
        ];
    }


    /**
     * Delete user by id
     *
     * @param int $id;
     *
     * @return int
     */
    public function deleteUser($id)
    {
        return $this->userRepository->destroy($id);
    }
}
